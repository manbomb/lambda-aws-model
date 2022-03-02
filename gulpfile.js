const gulp = require('gulp');
const zip = require('gulp-zip');
const del = require('del');
const run = require('gulp-run');

function clean() {
    return del('build/**/*', { force: true });
};

function cleanNoZip() {
    return del(['build/**/*', '!build/build.zip'], { force: true });
};

function copyJS() {
    return gulp.src(['./**/*.js', '!./test/**', '!./gulpfile.js']).pipe(gulp.dest('build'));
}

function copyPackage() {
    return gulp.src(['./package.json', './package-lock.json']).pipe(gulp.dest('build'));
}

function install() {
    return run('cd build && npm install --only=prod').exec();
}

function zipTask() {
    return gulp.src(['build/**/*']).pipe(zip('build.zip')).pipe(gulp.dest('build'));
}

exports.default = gulp.series(
    clean,
    copyJS,
    copyPackage,
    install,
    zipTask,
    cleanNoZip
);

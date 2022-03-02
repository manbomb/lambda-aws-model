const {
    handler
} = require('./src/main.js');

exports.handler = async function(event) {
    return await handler(event);
};
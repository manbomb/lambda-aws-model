const {
    handler: main
} = require('../src/main');

require('dotenv').config();

const AWS = require('aws-sdk');

AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: process.env.AWS_PROFILE});

test('Silly', async () => {
    const response = await main();
    const strResponse = JSON.stringify(response);

    expect(strResponse).toBe("{}");
});
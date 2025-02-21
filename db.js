const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();

client.on('error', (err) => {
    console.error('Redis error:', err);
});

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

module.exports = {
    client,
    getAsync,
    setAsync
};
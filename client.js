const { Redis } = require('ioredis')

//by default hit at the port 6379
const client = new Redis();

module.exports = client;
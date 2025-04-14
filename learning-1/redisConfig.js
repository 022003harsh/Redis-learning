const IORedis = require("ioredis");

const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  // password: "your-password-if-any",
  maxRetriesPerRequest: null, // required for BullMQ
  enableReadyCheck: false,    // optional but often helps in dev environments
});

module.exports = { connection };

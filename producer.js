const { Queue } = require('bullmq');
const { connection } = require('./redisConfig');

const notificationQueue = new Queue("email-queue", { connection });

async function init() {
    const res = await notificationQueue.add("email to piyush", {
        email: "hi piyush",
        subject: "welcome"
    });
    console.log("Job added to queue", res.id);
}

init();

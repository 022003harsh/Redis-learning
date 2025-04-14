const { Worker } = require("bullmq");
const { connection } = require("./redisConfig"); // we'll define this file below

const sendEmail = () => new Promise((res, rej) => setTimeout(() => res(), 5 * 1000));

const worker = new Worker("email-queue", async (job) => {
    console.log(`Message received id: ${job.id}`);
    console.log('Processing Message');
    console.log(`Sending email to ${job.data.email}`);
    await sendEmail();
    console.log("Email Sent");
}, { connection });

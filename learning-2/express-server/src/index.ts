//sending data to redis queue
import express from "express";
import { createClient } from "redis";

const app=express();
app.use(express.json());

const client = createClient();
client.connect()

app.post("/submit", async(req,res)=>{
    const {problemId, userId, code, language} = req.body;
    //push to db by prisma.submissions.create()
    try{
        //submissions here is variable: eg LPUSH submissions {problemId, userId, code, language}
        await client.lPush("submissions", JSON.stringify({problemId, userId, code, language}))

        res.json({
            message: "Submiission received!"
        })
    } catch(e){
        res.json({
            message: "Submssion failed :("
        })
    }
})

app.listen(3000);
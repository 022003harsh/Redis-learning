import { createClient } from "redis";

const client = createClient();

async function main(){
    await client.connect()
    //infinite loop
    while(1){
        //brPop is used for submissions variable with infinite wait time as 0 is there: (Brpop submissions 0)
        const response = await client.brPop("submissions", 0);
        console.log(response);
        //run docker exec user code
        await new Promise((resolve)=>setTimeout(resolve, 1000))
        //send it to the pubsub
        console.log("Processed user submissions");
    }
}

main()
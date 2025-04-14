const client = require("./client");

async function init(){
    await client.set("msg:6", "Hey from Nodejs");
    
    //entry will be deleted automatically after 10sec
    await client.expire("msg:6",10);
    const result = await client.get("msg:6");
    console.log("Result -> ", result);
}

init();
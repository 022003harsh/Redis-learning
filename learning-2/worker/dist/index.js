"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        //infinite loop
        while (1) {
            //brPop is used for submissions variable with infinite wait time as 0 is there: (Brpop submissions 0)
            const response = yield client.brPop("submissions", 0);
            console.log(response);
            //run docker exec user code
            // await new Promise((resolve)=>setTimeout(resolve, 1000))
            //send it to the pubsub
            console.log("Processed user submissions");
        }
    });
}
main();

// import { response } from "express";
import { response } from "express";
import fetch from "node-fetch";
// import { mClient } from "../mclient";
import {MongoClient} from "mongodb";

const mClient = async () => {
    const uri = "mongodb+srv://admin:Adsi2022@arc02.2lutz.mongodb.net/LocalTest?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    return client;
};
async function sum(){
const drone =fetch('https://api-pubconsole.media.net/v2/reports', {
    method: 'POST',
    headers: {
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcHViY29uc29sZS5tZWRpYS5uZXQiLCJzdWIiOiI4Q1UyUjFKWTciLCJpYXQiOjE2Njc3NzU2NjksImV4cCI6MTY2Nzg2MjA2OSwiYXVkIjpbXX0.cqsKkLeGVO5ydOaNIDGlvaAgc3YOfOoF5s5V3Fx4h7Csu2Xx8BKX8szEFzoh8oehjijfNwya2oTifWzHgQtK9_Mh_cjND4DF4Vl1bzAiJw9l4yiGfma-vvj5-jE-L4Tk68uCXWsTlOmIvAX99ULlVD9wftKVTMqhsA7wOUus37jnsBpWkdLMz1tYC7Cxi5_Yo71ol1QFj0vVgFyD4vW6668j08tUmP8PoSO1x7Ea-K64JRq2Pyi2LVUHl72Cg2tAibFb4t5l0OG4Vk24WZmEC_c8dfmnQ2e1syTlkZG3M3M5t3WCFUS0ilmCdEGWf-UFxJt0zGN6T1F7YGhKuciCnXQU9tcpxNy3GOw4hu1UWJTVWOCJSrYrUyEs-xlXeeUw0lQ7aG3pdkq9pRcq4TauCk9yqsn9I_bdwxvrA8RTnyPTXkcW5pZrrAK13uwIwf9ZWNzYpQnOc8RKw72AnBJXUDdApFmmw4ImgZa2jyQ2OREcIJpXA-60tCp6vJ8aZVus6FoTWs9QwCOH3yL5GjPoX3ov0D2LomvZ3BQkhTH6XZvPb0SdV5_Lz5tCO3PSp5DZcUF-OT3Q327Vw6RvYzkPvD-2mEDTIzb52YvFY2LRRcKssBqFdIEOBJRDd7md4I0_ZmiF8w1mgv4BcTCzcV9tekaeMj-UUiJyRDGtfsl1-lQ',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "start_date":"20221102",
        "end_date":"20221102",
        "pagination": {
        "page_no": "1",
        "page_size": 5000
                      },
       "group_by":["date","site","channel","channel_name2","channel_name3"]
   })
})
// .then(response => response.json())
// .then(response=>console.log(JSON.stringify(response)))
.then(response=>response.json())
.then (function(response){
// console.log(response.data.rows)
var slow=response.data.rows;
// console.log(slow.length)
const flow= async ()=>{
    const client = await mClient()

    //    console.log("slope", slope)
       await client.connect()
    //    await client.db("LocalTest").collection("M_daily").deleteMany({});
       
       await client.db("LocalTest").collection("M_daily").insertMany(slow)
    //   const data = await client.db("LocalTest").collection("sope").find({}).toArray()
      console.log("data")
      client.close()
}
flow()
})

}
sum()



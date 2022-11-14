// import { response } from "express";
// import { response } from "express";
import { MongoClient } from "mongodb";
import fetch from "node-fetch";


const mClient = async () => {
    const uri = "mongodb+srv://admin:Adsi2022@arc02.2lutz.mongodb.net/LocalTest?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    return client;
};
async function sum(){
const drone =fetch('https://api-pubconsole.media.net/v2/reports', {
    method: 'POST',
    headers: {
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcHViY29uc29sZS5tZWRpYS5uZXQiLCJzdWIiOiI4Q1VGMzUzVTUiLCJpYXQiOjE2Njc3NzU2NjksImV4cCI6MTY2Nzg2MjA2OSwiYXVkIjpbXX0.FXpA5E26ivJJezfjGDoXqpFKUIGq3vOxDxVQJN79buBFB_4XGL5marjMbgUlTnRGPlOKdJf1AT2rWRwraDnfxqlxkJn4bqaXdA-ple0RIbqj_r246cECTUNzLnfwCxlBEcYxbM5tdQJ3obIPkp-swssdGDEBjDFHzzKSJ_JoxOebYqsFuu9AdGVsiksTSVokWCSi_1BvHJEy8Cr4CXYB0QB1aRLM5EzJlkQb7exuLfq9-JOhHn_JEbPf9V9zxydkAhE4cq88lgv_bywO-nyak8ivFJkiKXbwVumqp7EwJSPa158osYaeAWW66Fe7kuQXKpTJVhszh3lYFctIwDuCLxJZLl7GpQq2bKVPQK4e6R1Pzgthtn_cR9Dp-ZpbF4QybORD1uV8BXbX9xrkUX95yEFec0Pd96iVMALSppcr9I32vsspomLy-GKF7RIR4GjCsfQAawEQdHlFY2RCuimSbBqCBS90QOrwyx9GfG0M8neSc0NZhcZP6SEm3cT0UX-OWQfXvHIdIFXRW_MP8VQkecFGTT8B4fETirUzuV3P2sEfprd9QQ-s7SrkEibZK9RSnekcHzGbZSrsIcHQLgMxB6QeFAOWjaQVwQCBCNVFcbxP5NMPO_8GCG1NyglR56esprd83oR1Yk03IbjyI48ENJk-Yd4NI5j1uj2Qohfm85Y',
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
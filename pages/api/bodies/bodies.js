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
const drone =await fetch('https://api.bodis.com/v2/reports/search', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer vNz1fM8hjO0sagT3PFafwVH4FkIwJDhj',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "report_type": "day",
        "order_by": "date",
        "page": "1",
        "per_page": "5",
        "sort_order": "desc",
        "filter": {
            "date_range": [
                "2015-01-01",
                "2020-03-23"
            ]
        }
    })
})
// .then(response => response.json())
// .then(response=>console.log(JSON.stringify(response)))
.then(response=>response.json())
.then (function(response){
console.log(response.metrics.data)
// var slow=response.data.rows;
// console.log(slow.length)
const flow= async ()=>{
    const client = await mClient()

    //    console.log("slope", slope)
       await client.connect()
    //    await client.db("LocalTest").collection("M_daily").deleteMany({});
       
    //    await client.db("LocalTest").collection("M_daily").insertMany(slow)
    //   const data = await client.db("LocalTest").collection("sope").find({}).toArray()
    //   console.log("data")
      client.close()
}
flow()
})

}
sum()
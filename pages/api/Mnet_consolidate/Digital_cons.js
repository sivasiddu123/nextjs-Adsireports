// import { response } from "express";
import { response } from "express";
import fetch from "node-fetch";
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
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcHViY29uc29sZS5tZWRpYS5uZXQiLCJzdWIiOiI4Q1VUN1c4M1IiLCJpYXQiOjE2Njc3NzU2NjksImV4cCI6MTY2Nzg2MjA2OSwiYXVkIjpbXX0.W0y2eI2O6q93dQjTBRU6gT9W6WvaArEPrhlBb9lMuJI2W58dj_dOm8sZgVwUme1udNTDlTuPXikNIHNV9JZexcDEBBWK3C4lqsx2ZLJZEIPhim3KVr_8ibILcnOwoQJp95eKqToqNSTHOblwdPzuoh5VGfp8AZoBFNgpjrkTT8SNKILm9qqdxzrZEPjfnxBBzVdpfiyZQjsWg8lBtjY0EZXbjRP0U6tp0hQ6W7Zci7NftQoSKk1a4Xcn9--edBEs2hDXWUt7VCKDzFkDVmvQLcC2N_tHu84_6pG7A7WBgxLQJg8nqaAheSCB-6MBjJ3enlapEzNXf2d_mwJ9Iv8q-DZnfoSahjBVkGYUSaIdAAeqgic5PneIa88UUPTbbQbIsW_AKw-Ai0XR8F3LIShfTJaZLh-hgdEJlaAK8_Kq6z-muDLx23SYO1T1aNQpk3W3MDhfSt7wmFpk4MkED1vt2g-jpT4oK3f5gGL7ZPmiTDH3yuXse9oYLxnULhfILm6jNhHfKW12TKJWc9A03-qSPDgFrnea7JD1D-bnlnyIJUY53T6VXFVCLK9SbWYtDNLC1psf1sgPu1CR0VFcOFJTbKj8_hXsXGKcmhCEExDq-B_E_qTUdvyKeYeY7I5v5h3cugvupHEHPvIG31KnIQEEJ104Jct5qODUaC6anLb4Sb8',
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
// import fetch from "node-fetch";
import {MongoClient} from "mongodb";
import { xml2json } from "xml-js";
import axios from "axios";
// import moment from "moment";
import moment from "moment-timezone";

async function mClient() {
  const uri = "mongodb+srv://admin:Adsi2022@arc02.2lutz.mongodb.net/LocalTest?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  return client;
}
async function sum(){

  var yesterday=moment().subtract(2,"days").format("MM/DD/YYYY")
  var today=moment().format("MM/DD/YYYY")

const response =await axios(`https://pubconsole.media.net/api/reports/v1/hourly-channel-wise?customer_guid=EC84F725-70B1-43E7-AECC-1C4E6B0CBBA6&customer_key=8CUT7W83R&from_date=${yesterday}&to_date=${today}&page_size=30000`)
.then(async function (response){
    // console.log("data", response)
    var result = xml2json(response.data, { compact: true, ignoreComment: true, spaces: 4 });
    var json = JSON.parse(result);
    // console.log(json.reportStats.statsData.reportItem)
    var siddu=json.reportStats.statsData.reportItem
    var mnet = siddu.map((element) => {
      const ST = new Date(element._attributes.date);
      const UTCTime = new Date(
        Date.UTC(
          ST.getFullYear(),
          ST.getMonth(),
          ST.getDate(),
          ST.getHours(),
          ST.getMinutes(),
          ST.getSeconds()
        )
      );
      const BST_time = moment(UTCTime).tz("Europe/London");
      const EDT_time = moment(UTCTime).tz("America/New_York");
      const GMT_time = moment(UTCTime).tz("Africa/Accra");
      const IST_time = moment(UTCTime).tz("Asia/Kolkata");
      const MST_time = moment(UTCTime).tz("America/Dawson");
      const PDT_time = moment(UTCTime).tz("America/Los_Angeles");
      const CDT_time = moment(UTCTime).tz("America/Chicago");
          return {
            date:moment(element._attributes.date).format('YYYY-MM-DD'),
            name:"Digital",
            delet_date:today,
            m_hour:moment(element._attributes.date).format('HH'),
            channelName:element._attributes.channelName,
            channelName2:element._attributes.channelName2,
            adset_id:element._attributes.channelName3,
            impressions:element._attributes.impressions,
            totalClicks:element._attributes.totalClicks,
            estimatedRevenue:element._attributes.estimatedRevenue.slice(1,5),
            // CDTDate:moment(element._attributes.date).tz("America/Chicago").format("DD"),
            // CDTMonth:moment(element._attributes.date).tz("America/Chicago").format("MM"),
            // CDTHour:moment(element._attributes.date).tz("America/Chicago").format("HH"),
        EDT_timestamp: EDT_time.format("YYYY-MM-DD"),
        EDTHour: moment(EDT_time).format("HH"),
        EDTDate: moment(EDT_time).format("DD"),
        EDTMonth: moment(EDT_time).format("MM"),
        BST_timestamp: BST_time.format("YYYY-MM-DD"),
        BSTHour: moment(BST_time).format("HH"),
        BSTDate: moment(BST_time).format("DD"),
        BSTMonth: moment(BST_time).format("MM"),
        MST_timestamp: MST_time.format("YYYY-MM-DD"),
        MSTHour: moment(MST_time).format("HH"),
        MSTDate: moment(MST_time).format("DD"),
        MSTMonth: moment(MST_time).format("MM"),
        GMT_timestamp: GMT_time.format("YYYY-MM-DD"),
        GMTHour: moment(GMT_time).format("HH"),
        GMTDate: moment(GMT_time).format("DD"),
        GMTMonth: moment(GMT_time).format("MM"),
        UTC_timestamp: moment(UTCTime).format("YYYY-MM-DD"),
        UTCHour: moment(UTCTime).format("HH"),
        UTCDate: moment(UTCTime).format("DD"),
        UTCMonth: moment(UTCTime).format("MM"),
        PDT_timestamp: PDT_time.format("YYYY-MM-DD"),
        PDTHour: moment(PDT_time).format("HH"),
        PDTDate: moment(PDT_time).format("DD"),
        PDTMonth: moment(PDT_time).format("MM"),
        IST_timestamp: IST_time.format("YYYY-MM-DD"),
        ISTHour: moment(IST_time).format("HH"),
        ISTDate: moment(IST_time).format("DD"),
        ISTMonth: moment(IST_time).format("MM"),
        CDT_timestamp: CDT_time.format("YYYY-MM-DD"),
        CDTHour: moment(CDT_time).format("HH"),
        CDTDate: moment(CDT_time).format("DD"),
        CDTMonth: moment(CDT_time).format("MM"),
          }
    })
    // .then (async function(){
    // for(var i=0;i<mnet.length;i++){
        // console.log(`hello`)
        const client = await mClient()
                //    console.log("slope", slope)
                   await client.connect()
                   await client.db("LocalTest").collection("moment_mnet").deleteMany({name:"Digital",delet_date:today});
                   
                    await client.db("LocalTest").collection("moment_mnet").insertMany(mnet)
                  //  const data = await client.db("LocalTest").collection("moment_mnet").find({}).toArray()
                //   const data = await client.db("LocalTest").collection("sope").find({}).toArray()
                  console.log(mnet.length)
                  client.close()
    // }
})
// })

}
sum()
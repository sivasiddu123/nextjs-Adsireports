import {MongoClient} from "mongodb";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { CellComp } from "ag-grid-enterprise";

<p>hello</p>
export default function About(props) {
    const spender = (params) => {
        var total = 0;
        // console.log("sps",params)
        params.values.forEach((value) => (total += parseFloat(value)));
        // return total.toFixed(2);
        var total1 = total.toString()
        var total2 = total1.split(".")
        if (total2[1] !== undefined && total2[1].length > 2){
          var total22 = total2[1].slice(0,2)
          var totalone = total2[0]+'.'+total22
          return parseFloat(totalone).toFixed(2)
        }
        return total;
      };
      
      const getMargin = (params) => {
        if (params.data !== undefined) {
            var margin = params.data
          return margin + "%";
        }
        if (params.node.aggData !== undefined) {
          const { Profit, Spend } = params.node.aggData;
          const margin = (Profit / Spend) * 100;
          return Number(margin.toFixed(2)) + "%";
        }
      };
    //   const getcpl = (params) => {
    //     if (params.data !== undefined) {
    //         var CPL = params.data
    //       return CPL;
    //     }
    //     if (params.node.aggData !== undefined) {
    //       const {Spend,Fb_lead} = params.node.aggData;
    //       const CPL = (Spend/Fb_lead);
    //       return Number(CPL.toFixed(2));
    //     }
    //   };
    
    const ColoumnDefs=[
        {field:"Campaign_name",
        rowGroup: true,
        resizeble:true,
        sortable:true,
        width:30,
        filter: "agTextColumnFilter",
        // flex:1, 
        hide: true,
        columnGroupShow:"open" ,
        
    },
    // { headerName: "Hour", field: "f_hour", maxWidth: 85},
        {field:"Spend",
        resizeble:true,
        filter: 'agSetColumnFilter',
        sortable:true,
        headerTooltip:"FB Spend",
        aggFunc: spender,
        // valueFormatter:DecimalFormatter,
        },
        {field:"Rev",
        aggFunc: spender,}, 
        {field:"Profit",
        aggFunc: spender,
        sortable:true,},
        {field:"Margin",
        valueGetter: getMargin},
        {field:"Fb_lead",
        aggFunc: spender,},
        {field:"Conversions",
        aggFunc: spender,},
        {field:"Cpl",
        aggFunc: spender,
        },
        {field:"Mcpl",
        aggFunc: spender,},
        {field:"Rpc",
        aggFunc: spender,},
        {field:"Cpc",
        aggFunc: spender,},
        {field:"Fb_clicks",
        aggFunc: spender,},

      ];
      

      const defaultColDef=useMemo(()=>({
        floatingFilter: true,
        resizable:true,
        enableRowGroup:true,
        // pagination:true
       
      }),[])
      
    return(
        <div className="ag-theme-alpine"
        style={{ width: "100%", height: "500px"
        }}> 
        
 
          <AgGridReact 
        rowData={props.data} 
        columnDefs={ColoumnDefs}
        defaultColDef={defaultColDef}
        suppressAggFuncInHeader={true}
        // autoGroupColumnDef={autoGroupColumnDef}
        autoGroupColumnDef={{
            headerName: "Campaign_id",
            minWidth: 420,
          }}
        groupIncludeFooter={true}
         groupIncludeTotalFooter={true}
         animateRows={true}
        //  pagination={true}
        //  paginationAutoPageSize={true}
       
         />
        </div>
      );
}
    
export async function getServerSideProps() {

    const mClient = async () => {
        const uri = "mongodb+srv://admin:Adsi2022@arc02.2lutz.mongodb.net/LocalTest?retryWrites=true&w=majority";
      
        const client = new MongoClient(uri);
        return client;
      }; 
      const client = await mClient()
        await client.connect()
        const data = await client.db("LocalTest").collection("consolidate_fb_mnet").find({}).project({_id:0}).toArray()
        // console.log(data.length)

    return {
        props: {data: data || []},
    };
}
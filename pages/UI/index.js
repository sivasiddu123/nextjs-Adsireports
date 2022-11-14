import { AgGridReact } from "ag-grid-react";
// import { model } from "mongoose";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


function App(){
  const rowData=[
    {make:'ford', movie:'rows'},
    {make:'ford', movie:'rows'},
    {make:'ford', movie:'rows'}
  ];
  const ColoumnDefs=[
    {field:"make"},
    {field:"movie"},
    // {field:"honey"}
  ];

  return(
    <div className="ag-theme-alpine"
    style={{ width: "92.55%", height: "70vh"
    }}> 
      <AgGridReact 
    rowData={rowData} 
    columnDefs={ColoumnDefs} />
    </div>
  );
}
export default App;
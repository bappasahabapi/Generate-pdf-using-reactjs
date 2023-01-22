// import React from "react";
// import XLSX from "xlsx";
// import {
//   firstTableData,
//   firstTableColumns,
//   secondTableColumns,
//   secondTableData,
// } from "../components/utils/utils";

// function GenerateExcel() {
//   const downloadExcel = () => {
//     handleExport().then((url) => {
//       const downloadAnchorNode = document.createElement("a");
//       downloadAnchorNode.setAttribute("href", url);
//       downloadAnchorNode.setAttribute("download", "report.xlsx");
//       downloadAnchorNode.click();
//       downloadAnchorNode.remove();
//     });
//   };

//   const handleExport = () => {
//     let title = [{ A: "Excel Sheet 1" }].concat("");

//     let table1 = [
//       {
//         A: "Name",
//         B: "Email",
//         C: "Gender",
//         D: "Age",
//         E: "Profession",
//       },
//     ];
//     let table2 = [
//       {
//         A: "Name",
//         B: "Email",
//         C: "Year",
//         D: "Fee",
//       },
//     ];
//     firstTableData.forEach((row) => {
//       table1.push({
//         A: row.name,
//         B: row.email,
//         C: row.gender,
//         D: row.age,
//         E: row.profession,
//       });
//     });
//     secondTableData.forEach((row) => {
//       table2.push({
//         A: row.name,
//         B: row.email,
//         C: row.year,
//         D: row.fee,
//       });
//     });

//     let table = [{ A: "Table Data" }]
//       .concat(table1)
//       .concat([""])
//       .concat(table2);

//     let finalData = [...title, ...table];

//     const wb = XLSX.utils.book_new();

//     // we will add multiple sheets

//     // sheet 1
//     const sheet1 = XLSX.utils.json_to_sheet(finalData, {
//       skipHeader: true,
//     });

//     // sheet 2
//     title = [{ A: "Excel Sheet 2" }].concat("");
//     table = [{ A: "Table Data" }].concat(table2);
//     finalData = [...title, ...table];

//     const sheet2 = XLSX.utils.json_to_sheet(finalData, {
//         skipHeader: true,
//       });

//       XLSX.utils.book_append_sheet(wb, sheet1, "First Sheet");
//       XLSX.utils.book_append_sheet(wb, sheet2, "Second Sheet");

//       const workbookBlob = workbook2blob(wb);


//   };

//   return (
//     <div>
//       <h1>GenerateExcel</h1>
//       <button onClick={downloadExcel}>Download Excel</button>
//     </div>
//   );
// }

// export default GenerateExcel;

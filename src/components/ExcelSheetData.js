import React, { useState } from "react";
import * as XLSX from "xlsx";

function ExcelSheetData() {
  const [data, setData] = useState([
    ["Name", "Age", "City"],
    ["John", "32", "New York"],
    ["Jane", "40", "Chicago"],
  ]);
  const [fileName, setFileName] = useState("data.xlsx");

  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, fileName);
  }

  return (
    <div>
        <h1>Export to Excel </h1>
      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
}

export default ExcelSheetData;


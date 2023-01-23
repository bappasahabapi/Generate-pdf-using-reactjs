import React from "react";
import * as XLSX from "xlsx";

// import XlsxPopulate from 'xlsx-populate';
import {
  firstTableData,
  secondTableData,
} from "../components/utils/utils";

function GenerateExcel() {
  const downloadExcel = () => {
    handleExport().then((url) => {
      const downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", url);
      downloadAnchorNode.setAttribute("download", "report.xlsx");
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    });
  };

  const handleExport = () => {
    let title = [{ A: "Excel Sheet 1" }].concat("");

    let table1 = [
      {
        A: "Name",
        B: "Email",
        C: "Gender",
        D: "Age",
        E: "Profession",
      },
    ];
    let table2 = [
      {
        A: "Name",
        B: "Email",
        C: "Year",
        D: "Fee",
      },
    ];
    firstTableData.forEach((row) => {
      table1.push({
        A: row.name,
        B: row.email,
        C: row.gender,
        D: row.age,
        E: row.profession,
      });
    });
    secondTableData.forEach((row) => {
      table2.push({
        A: row.name,
        B: row.email,
        C: row.year,
        D: row.fee,
      });
    });

    let table = [{ A: "Table Data" }]
      .concat(table1)
      .concat([""])
      .concat(table2);

    let finalData = [...title, ...table];

    const wb = XLSX.utils.book_new();

    // we will add multiple sheets

    // sheet 1
    const sheet1 = XLSX.utils.json_to_sheet(finalData, {
      skipHeader: true,
    });

    // sheet 2
    title = [{ A: "Excel Sheet 2" }].concat("");
    table = [{ A: "Table Data" }].concat(table2);
    finalData = [...title, ...table];

    const sheet2 = XLSX.utils.json_to_sheet(finalData, {
      skipHeader: true,
    });

    XLSX.utils.book_append_sheet(wb, sheet1, "First Sheet");
    XLSX.utils.book_append_sheet(wb, sheet2, "Second Sheet");

    const workbookBlob = workbook2blob(wb);
    XLSX.writeFile(wb, "SheetJSTable.xlsx");

  //   let headerIndexes = [];
  //   finalData.forEach((data, index) =>
  //     data["A"] === "Name" ? headerIndexes.push(index) : null
  //   );

  //   const totalRecords = [...firstTableData, ...secondTableData].length;
  //   const dataInfo = {
  //     titleCell: "A2",
  //     titleRange: "A1:D2",
  //     tbodyRange: `A4:D${finalData.length}`,
  //     theadRange:
  //       headerIndexes?.length >= 1
  //         ? `A${headerIndexes[0]}:D${headerIndexes[0]}`
  //         : null,
  //     theadRange1:
  //       headerIndexes?.length >= 1
  //         ? `A${headerIndexes[0] + 1}:D${headerIndexes[0] + 1}`
  //         : null,
  //     tFirstColumnRange:
  //       headerIndexes?.length >= 1
  //         ? `A${headerIndexes[0] + 1}:A${totalRecords + headerIndexes[0] + 1}`
  //         : null,
  //   };
  //   return addStyle(workbookBlob, dataInfo);
  };

  const workbook2blob = (workbook) => {
    const wopts = {
      bookType: "xlsx",
      bookSST: false,
      type: "binary",
    };

    const wbout = XLSX.write(workbook, wopts);
    const blob = new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    });

    return blob;
  };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);

    for (let i = 0; i < s.length; ++i) {
      view[i] = s.charCodeAt(i);
    }

    return buf;
  };

  // const addStyle = async (workbookBlob, dataInfo) => {
  //   const workbook = await XlsxPopulate.fromDataAsync(workbookBlob);
  //   workbook.sheets().forEach((sheet) => {
  //     sheet.usedRange().style({
  //       fontFamily: "Arial",
  //       verticalAlignment: "center",
  //     });

  //     sheet.column("A").width(15);
  //     sheet.column("B").width(25);

  //     sheet.range(dataInfo.titleRange).merged(true).style({
  //       bold: true,
  //       horizontalAlignment: "center",
  //       verticalAlignment: "center",
  //     });

  //     sheet.range(dataInfo.theadRange).merged(true).style({
  //       bold: true,
  //       horizontalAlignment: "center",
  //       verticalAlignment: "center",
  //     });

  //     sheet.range(dataInfo.theadRange1).style({
  //       bold: true,
  //       horizontalAlignment: "center",
  //       verticalAlignment: "center",
  //     });

  //     if (dataInfo.tbodyRange) {
  //       sheet.range(dataInfo.tbodyRange).style({
  //         horizontalAlignment: "center",
  //       });
  //     }
  //   });
  //   const workbookBlob_1 = await workbook.outputAsync();
  //   return URL.createObjectURL(workbookBlob_1);
  // };


  return (
    <div style={{color:'salmon'}}>
      <h1>🔥GenerateExcel Using Documentation🔥</h1>
      <button onClick={downloadExcel}>Download Excel</button>
    </div>
  );
}

export default GenerateExcel;

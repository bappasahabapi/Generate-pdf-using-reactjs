import jsPDF from "jspdf";
import "jspdf-autotable";
import { useState } from "react";
import {
  firstTableData,
  firstTableColumns,
  secondTableColumns,
  secondTableData,
} from "../components/utils/utils";

function GeneratePdfWithPages() {
  const [pdfDoc, setPdfDoc] = useState();

  const handleDownloadePdfPages = () => {

    setPdfDoc(new jsPDF());
    const totalPages = "{total_pages_count_string}";
    pdfDoc.page = 1;
    pdfDoc.text("Report", 15, 10);


    // TODO:-------------------- Cusotm json data loading
    // pdfDoc.autoTable({
    //   theme: "grid",
    //   headStyles: { fontSize: 14 },
    //   bodyStyles: { fontSize: 8, fontStyle: "italic" },
    //   columns: firstTableColumns.map((col) => ({ ...col, dataKey: col.field })),
    //   body: firstTableData,
    // });


// TODO:-------------------- add pages number:
    pdfDoc.autoTable({
      theme: "grid",
      columns: secondTableColumns.map((col) => ({
        ...col,
        dataKey: col.field,
      })),
      body: secondTableData,
    });

    pdfDoc.autoTable( {
      theme: "grid",
      columns: secondTableColumns.map((col) => ({
        ...col,
        dataKey: col.field,
      })),
      body: secondTableData,

      addPageContent: (data) => {
        let footerStr = "Page " + pdfDoc.internal.getNumberOfPages();
        if (typeof pdfDoc.putTotalPages === "function") {
          footerStr = footerStr + " of " + totalPages;
        }
        pdfDoc.setFontSize(10);
        pdfDoc.text(
          footerStr,
          data.settings.margin.left,
          pdfDoc.internal.pageSize.height - 10
        );
      },
    });
    if (typeof pdfDoc.putTotalPages === "function") {
      pdfDoc.putTotalPages(totalPages);
    }

    pdfDoc.save("pageNo.pdf");
  };
  return (
    <div>
      <h2>Showing the GeneratePdfWithPages component for generating pdf</h2>
      <h1>
        <button onClick={handleDownloadePdfPages}>Click ➡️ Generate PDF with pages</button>
      </h1>
    </div>
  );
}

export default GeneratePdfWithPages;

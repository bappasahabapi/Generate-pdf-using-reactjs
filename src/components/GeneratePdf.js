import jsPDF from "jspdf";
import "jspdf-autotable";
import { useState } from "react";
import {
  firstTableData,
  firstTableColumns,
  secondTableColumns,
  secondTableData,
} from "../components/utils/utils";

function GeneratePdf() {
  const [pdfDoc, setPdfDoc] = useState();

  const handleDownloadePDF = () => {
    setPdfDoc(new jsPDF());
    // const pdfDoc = new jsPDF();

    const totalPages = "{total_pages_count_string}";
    pdfDoc.text("Report", 15, 10);

    pdfDoc.autoTable({
      theme: "plain",
      headStyles: { fontSize: 14 },
      bodyStyles: { fontSize: 8, fontStyle: "italic" },
      head: [["Name", "Age", "Gender", "HomeTown"]],
      body: [
        ["Bappa da", 26, "Male", "Thakurgaon"],
        [" Donal Tramp", 40, "Male", "Dinajpur"],
      ],
    });
    pdfDoc.autoTable({
      theme: "grid",
      headStyles: { fontSize: 14 },
      bodyStyles: { fontSize: 8, fontStyle: "italic" },
      head: [["Name", "Age", "Gender", "HomeTown"]],
      body: [
        ["Bappa da", 26, "Male", "Thakurgaon"],
        [" Donal Tramp", 40, "Male", "Dinajpur"],
      ],
    });
    pdfDoc.autoTable({
      theme: "striped",
      headStyles: { fontSize: 14 },
      bodyStyles: { fontSize: 8, fontStyle: "italic" },
      head: [["Name", "Age", "Gender", "HomeTown"]],
      body: [
        ["Bappa da", 26, "Male", "Thakurgaon"],
        [" Donal Tramp", 40, "Male", "Dinajpur"],
      ],
    });

    // TODO:-------------------- Cusotm json data loading
    pdfDoc.autoTable({
      theme: "grid",
      headStyles: { fontSize: 14 },
      bodyStyles: { fontSize: 8, fontStyle: "italic" },
      columns: firstTableColumns.map((col) => ({ ...col, dataKey: col.field })),
      body: firstTableData,
    });


// TODO:-------------------- add pages
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

    pdfDoc.save("withoutPageNo.pdf");
  };
  return (
    <div>
      <h2>Showing the GeneratePdf component for generating pdf</h2>
      <h1>
        <button onClick={handleDownloadePDF}>Click ➡️ Generate PDF</button>
      </h1>
    </div>
  );
}

export default GeneratePdf;

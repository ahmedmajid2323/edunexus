import { useState } from "react";
import { Document, Page } from "react-pdf";

function Pdf_render({ path }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={styles.container}>
      <Document
        file={path} // Path to the PDF file
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          width={600} // Adjust width to fit the modal
          renderTextLayer={false} // Disable text layer for better performance
          renderAnnotationLayer={false} // Disable annotation layer for better performance
        />
      </Document>
      <div style={styles.pagination}>
        <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
          disabled={pageNumber <= 1}
          className="bg-[#388388] rounded-2xl p-3 text-white text-sm">
          Previous
        </button>
        <span style={styles.pageInfo}>
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
          disabled={pageNumber >= numPages}
          className="bg-[#388388] rounded-2xl p-3 text-sm text-white px-5">
          Next
        </button>
      </div>
    </div>
  );
}

// Styles for the PDF viewer
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
    maxHeight: "80vh", // Adjust based on modal height
    width: "100%",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  button: {
    padding: "8px 16px",
    margin: "0 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  pageInfo: {
    margin: "0 10px",
    fontSize: "16px",
  },
};

export default Pdf_render;
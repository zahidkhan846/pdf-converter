import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import TableComponent from "./TableComponent";

function PdfConverter() {
  const componentRef = useRef();

  return (
    <div>
      <h1>Export HTMl Table in PDF File</h1>

      <TableComponent ref={componentRef} />

      <ReactToPrint
        content={() => componentRef.current}
        trigger={() => (
          <button className="btn btn-primary">Print to PDF!</button>
        )}
      />
    </div>
  );
}

export default PdfConverter;

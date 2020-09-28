import React, { useState } from "react";
import Receipt from "./Receipt";
import "../App.css";

function Receipts({ receipt }) {
  return (
    <div className="receipts">
      {receipt.map((order) => (
        <Receipt info={order} />
      
      ))}
    </div>
  );
}

export default Receipts;
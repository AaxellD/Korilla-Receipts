import React from "react";
import "../App.css";

function Receipt({ info }) {
  return (
    <div className="receipt__card">
      <h1>{info.person}</h1>
      <h3>{info.order.main}</h3>
      <hr style={{ width: "100%" }} />
      <ul>
        <li>Protein: {info.order.protein}</li>
        <li>Rice: {info.order.rice}</li>
        <li>Sauce: {info.order.sauce}</li>
        <li>Drink: {info.order.drink}</li>
        <li>Cost: ${info.order.cost}</li>
      </ul>
      <p>Paid: {info.paid.toString()}</p>
    </div>
  );
}

export default Receipt;

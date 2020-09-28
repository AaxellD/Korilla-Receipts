import React from "react";
import "../App.css";

function Form({ setPerson, handlePerson, person, handlePaid, handleUnpaid, handleSort }) {
  return (
    <div>
      <form className="app__form">
        <input
          type="text"
          value={person}
          onChange={(event) => setPerson(event.target.value)}
        />
        <button onClick={handlePerson}>Submit</button>
      </form>

      <button className="form__payment" onClick={handlePaid}>Paid</button>
      <button className="form__payment" onClick={handleUnpaid}>Unpaid</button>
      <button className="form__payment" onClick={handleSort}>Alphabetical</button>
    </div>
  );
}

export default Form;

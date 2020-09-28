import React, { useState } from "react";
import "./App.css";
import ReceiptsArr from "./receiptData";
import Form from "./components/Form";
import Receipts from "./components/Receipts";
import Addreceipt from "./components/AddReceipt";

function App() {
  const [receipt, setReceipt] = useState(ReceiptsArr);
  const [filter, setFilter] = useState(receipt);
  const [person, setPerson] = useState("");
  const [newRec, setNewRec] = useState({
    id: receipt.length,
    person: "",
    order: {
      main: "",
      protein: "",
      sauce: "",
      drink: "",
      cost: "",
    },
    paid: false,
  });

  // submit button -- filters array based on person
  const handlePerson = (event) => {
    event.preventDefault();
    if (person.length > 0) {
      setFilter(
        receipt.filter(
          (order) => order.person.toLowerCase() === person.toLowerCase()
        )
      );
    } else {
      setFilter(receipt);
    }
    setPerson("");
  };

  // Bonus: filter based on paid or not paid or alphabetically
  const handlePaid = () => {
    setFilter(receipt.filter((order) => order.paid === true));
  };
  // filter by unpaid receipts
  const handleUnpaid = () => {
    setFilter(receipt.filter((order) => order.paid === false));
  };
  // filter by alphabetical order
  const handleSort = () => {
    const newArr = [].concat(receipt).sort((a, b) => {
      return a.person[0] > b.person[0];
    });
    setReceipt(newArr);
    setFilter(newArr);
  };
  // ADD NEW RECEIPT FORM
  const addNewReceipt = (event) => {
    event.preventDefault();
    setReceipt([...receipt, newRec]);
    setFilter([...receipt, newRec]);
    setNewRec({
      id: receipt.length,
      person: "",
      order: {
        main: "",
        protein: "",
        sauce: "",
        drink: "",
        cost: "",
      },
      paid: false,
    });
  };

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      {/* SEARCH FORM */}
      <Form
        person={person}
        setPerson={setPerson}
        handlePerson={handlePerson}
        handlePaid={handlePaid}
        handleUnpaid={handleUnpaid}
        handleSort={handleSort}
      />
      {/* RECEIPTS */}
      <Receipts receipt={filter} />
      {/* ADD RECEIPT */}
      <Addreceipt
        newRec={newRec}
        setNewRec={setNewRec}
        addNewReceipt={addNewReceipt}
      />
    </div>
  );
}

export default App;

import React from "react";

function AddReceipt({ newRec, setNewRec, addNewReceipt }) {
  return (
    <div>
      <h1>ADD NEW RECEIPT</h1>
      <form className="addReceipt__form">
        <label>Person</label>
        <input
          type="text"
          className="AddReceipt__input"
          value={newRec.person}
          onChange={(event) =>
            setNewRec({ ...newRec, person: event.target.value })
          }
        />
        <label>Main:</label>
        <input
          type="text"
          className="AddReceipt__input"
          value={newRec.order.main}
          onChange={(event) =>
            setNewRec({
              ...newRec,
              order: { ...newRec.order, main: event.target.value },
            })
          }
        />
        <label>Protein:</label>
        <input
          type="text"
          className="AddReceipt__input"
          value={newRec.order.protein}
          onChange={(event) =>
            setNewRec({
              ...newRec,
              order: { ...newRec.order, protein: event.target.value },
            })
          }
        />
        <label>Rice:</label>
        <input
          type="text"
          className="AddReceipt__input"
          value={newRec.order.rice}
          onChange={(event) =>
            setNewRec({
              ...newRec,
              order: { ...newRec.order, rice: event.target.value },
            })
          }
        />
        <label>Sauce:</label>
        <input
          type="text"
          className="AddReceipt__input"
          value={newRec.order.sauce}
          onChange={(event) =>
            setNewRec({
              ...newRec,
              order: { ...newRec.order, sauce: event.target.value },
            })
          }
        />
        <label>Drink:</label>
        <input
          type="text"
          className="AddReceipt__input"
          value={newRec.order.drink}
          onChange={(event) =>
            setNewRec({
              ...newRec,
              order: { ...newRec.order, drink: event.target.value },
            })
          }
        />
        <label>Cost</label>
        <input
          type="number"
          className="AddReceipt__input"
          value={newRec.order.cost}
          onChange={(event) =>
            setNewRec({
              ...newRec,
              order: { ...newRec.order, cost: event.target.value },
            })
          }
        />
        <button onClick={addNewReceipt}>Add Order</button>
      </form>
    </div>
  );
}

export default AddReceipt;

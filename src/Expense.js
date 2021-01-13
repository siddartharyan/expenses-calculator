import React from "react";
import Create from "./Create.js";
import "./styles.css";
function Expense({ expense, handleDelete }) {
  return (
    <div className="expense">
      {expense.map((ele, index) => (
        <Create
          ele={ele}
          handleDelete={handleDelete}
          type="expense"
          index={index}
        />
      ))}
    </div>
  );
}
export default Expense;

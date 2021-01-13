import React from "react";
import Create from "./Create.js";
import "./styles.css";
function Income({ income, handleDelete }) {
  return (
    <div className="income">
      {income.map((ele, index) => (
        <Create
          ele={ele}
          handleDelete={handleDelete}
          type={"income"}
          index={index}
        />
      ))}
    </div>
  );
}
export default Income;

import React from "react";
import "./styles.css";
function Create({ ele, handleDelete, type, index }) {
  function handleClick() {
    handleDelete(type, index);
  }
  return (
    <div className="finaltype">
      <button onClick={handleClick}>X</button>
      <div>
        <p>{ele.name}</p>
        <p>
          <strong>{ele.amount}</strong>
        </p>
      </div>
    </div>
  );
}
export default Create;

import React, { useEffect, useState } from "react";
import Income from "./Income.js";
import Expense from "./Expense.js";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState({ amount: 0, type: "" });
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [money, setMoney] = useState(0);
  function handleMoney() {
    let value = 0;
    for (let i = 0; i < income.length; i++) {
      value += Number(income[i].amount);
    }
    for (let i = 0; i < expense.length; i++) {
      value += Number(expense[i].amount);
    }
    setMoney(value);
  }

  useEffect(() => {
    handleMoney();
  });

  function handleChange(evnt) {
    setVal((prev) => ({
      ...prev,
      [evnt.target.name]: evnt.target.value
    }));
  }

  function handleClick() {
    if (isNaN(val.amount) || val.type === "" || val.amount === 0) {
      setVal(0);
      return;
    }
    let obj = {
      name: val.type,
      amount: val.amount
    };
    if (Number(val.amount) < 0) {
      let obj1 = [...expense];
      obj1.push(obj);
      setExpense(() => obj1);
    } else {
      let obj1 = [...income];
      obj1.push(obj);
      setIncome(() => obj1);
    }
    setVal({ amount: 0, type: "" });
  }

  function handleDelete(type, index) {
    let obj = [];
    if (type === "income") {
      for (let i = 0; i < income.length; i++) {
        if (i !== index) {
          obj.push(income[i]);
        }
      }
      setIncome(obj);
    } else if (type === "expense") {
      for (let i = 0; i < expense.length; i++) {
        if (i !== index) {
          obj.push(expense[i]);
        }
      }
      setExpense(obj);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <p>Expenses Calculator</p>
        <span>
          Total Amount Remaining:<strong>{money}</strong>
        </span>
      </div>
      <div>
        <div>
          <label>Enter the Amount</label>
          <input
            value={val.amount}
            name="amount"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Enter the Source</label>
          <input
            name="type"
            type="text"
            value={val.type}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>ADD</button>
      </div>
      <div className="name">
        <p>Income</p>
        <p>Expense</p>
      </div>
      <div className="type">
        <Income income={income} handleDelete={handleDelete} />
        <Expense expense={expense} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

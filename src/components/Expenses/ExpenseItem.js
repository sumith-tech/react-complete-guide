import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle]= useState(props.title);

  const eventButton = () =>{
    
    setTitle('updated');
    console.log(title)

  }

  const eventDelete = (dlt) => {
    const parentNode=document.getElementsByClassName('card expenses');
    const childNode=document.getElementById(dlt);

    // parentNode.removeChild(childNode);
    console.log(childNode) 

  }

  const [amount, setAmount] = useState(props.amount);
  const changeExpense = ()=>{
    setAmount(100);
  }

  return (

    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p>{props.location}</p>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button className="change-amount" onClick={eventButton}>Change amount</button>
      <button className="change-expenses" onClick={changeExpense}>change expenses</button>
    </Card>
  );
};

export default ExpenseItem;

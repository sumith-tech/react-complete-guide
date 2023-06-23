import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const eventButton = () =>{
    console.log('clicked!!!')
  }

  const eventDelete = (dlt) => {
    const parentNode=document.getElementsByClassName('card expenses');
    const childNode=document.getElementById(dlt);

    // parentNode.removeChild(childNode);
    console.log(childNode) 

  }

  return (

    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p>{props.location}</p>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={eventButton}>Change amount</button>
      <button onClick={()=>eventDelete(props.id)}>Delete expenses</button>
    </Card>
  );
};

export default ExpenseItem;

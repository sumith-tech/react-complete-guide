import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../Filters/ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (changedYear) => {
    setfilteredYear(changedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
        ;
      </Card>
    </div>
  );
};
export default Expenses;

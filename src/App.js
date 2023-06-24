import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
function App() {
  const expenses = [
    {
      id:'1',
      title: "books",
      amount: 100,
      date: new Date(2023, 5, 22),
      location: "chennai",
    },
    {
      id:'2',
      title: "outfit",
      amount: 300,
      date: new Date(2023, 5, 16),
      location: "t-nagar",
    },
    {
      id:'3',
      title: "bat",
      amount: 180,
      date: new Date(2023, 3, 2),
      location: "madvaram",
    },
    {
      id:'4',
      title: "medicine",
      amount: 410,
      date: new Date(2023, 8, 24),
      location: "kilpauk",
    },
  ];

  return (
    <div>
      <NewExpenses></NewExpenses>
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;

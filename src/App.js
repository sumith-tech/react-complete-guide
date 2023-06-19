import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      item: "books",
      price: 100,
      date: new Date(2023, 5, 22),
      location: "chennai",
    },
    {
      item: "outfit",
      price: 300,
      date: new Date(2023, 5, 16),
      location: "t-nagar",
    },
    {
      item: "bat",
      price: 180,
      date: new Date(2023, 3, 2),
      location: "madvaram",
    },
  ];
  return (
    <div>
      <h2>Lesson 1</h2>
      <ExpenseItem
        title={expenses[0].item}
        amount={expenses[0].price}
        date={expenses[0].date}
        location={expenses[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].item}
        amount={expenses[1].price}
        date={expenses[1].date}
        location={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].item}
        amount={expenses[2].price}
        date={expenses[2].date}
        location={expenses[2].location}
      ></ExpenseItem>
    </div>
  );
}

export default App;

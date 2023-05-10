import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  const expense = [
    { title: "Car Insurance", amount: 294.00, date: new Date(2022, 9, 28) },
    { title: "Toilet Paper", amount: 24.16, date: new Date(2021, 4, 28) },
    { title: "New Tv", amount: 94.70, date: new Date(2022, 10, 28) },
    { title: "New Desk", amount: 29.12, date: new Date(2021, 5, 28) },
  ];

  return (
    <div>
      <h2>Expensa App</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;

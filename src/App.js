import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expense = [
    { title: "Car Insurance", amount: 294.0, date: new Date(2022, 9, 28) },
    { title: "Toilet Paper", amount: 24.16, date: new Date(2021, 4, 28) },
    { title: "New Tv", amount: 94.7, date: new Date(2022, 10, 28) },
    { title: "New Desk", amount: 29.12, date: new Date(2021, 5, 28) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expense} />
    </div>
  );
}

export default App;

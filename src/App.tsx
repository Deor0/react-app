import { useState } from "react";
import ExpenseList from "./expenseTracker/component/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, catagory: "Utilites" },
    { id: 2, description: "bbb", amount: 10, catagory: "Utilites" },
    { id: 3, description: "ccc", amount: 10, catagory: "Utilites" },
    { id: 4, description: "ddd", amount: 10, catagory: "Utilites" },
  ]);
  if (expenses.length === 0) return null;

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;

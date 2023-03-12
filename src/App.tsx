import { useState } from "react";
import ExpenseList from "./expenseTracker/component/ExpenseList";
import ExpenseFilter from "./expenseTracker/component/ExpenseFilter";
import ExpenseForm from "./expenseTracker/component/ExpenseForm";
import catagories from "./expenseTracker/catagories";

function App() {
  const [selectedCatagory, setSelectedCatagory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, catagory: "Utilites" },
    { id: 2, description: "bbb", amount: 10, catagory: "Entertainment" },
    { id: 3, description: "ccc", amount: 10, catagory: "Groceries" },
    { id: 4, description: "ddd", amount: 10, catagory: "Utilites" },
  ]);

  const visibleExpenses = selectedCatagory
    ? expenses.filter((e) => e.catagory === selectedCatagory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(catagory) => setSelectedCatagory(catagory)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;

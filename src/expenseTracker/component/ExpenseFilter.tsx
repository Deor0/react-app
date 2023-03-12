interface Props {
  onSelect: (catagory: string) => void;
}

const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelect(event.target.value)}
    >
      <option value="">All Catagories</option>
      <option value="Utilites">Utilites</option>
      <option value="Groceries">Groceries</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;

import catagories from "../catagories";

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
      {catagories.map((catagory) => (
        <option key={catagory} value={catagory}>
          {catagory}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;

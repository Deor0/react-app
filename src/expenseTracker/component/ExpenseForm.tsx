const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Description
        </label>
        <input name="title" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input name="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="catagory" className="form-label">
          Catagory
        </label>
        <select name="catagory" id="" className="form-control">
          <option></option>
          <option>Groceries</option>
          <option>Utilites</option>
          <option>Entertainment</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;

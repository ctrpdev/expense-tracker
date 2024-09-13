import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { addExpenseAction } from "store/expense/expense-slice";
import { useState } from "react";

export function ExpenseInput(props) {
  const dispatch = useDispatch();
  const noIncome = useSelector((store) => store.EXPENSE.noIncome);
  const [expenseName, setExpenseName] = useState("");
  const [price, setPrice] = useState("");

  function submit(e) {
    e.preventDefault();
    //como price y price tienen el mismo nombre, podria usar solo un price en lugar de price: price
    try {
      if (String(expenseName.length) > 0 && !isNaN(Number.parseFloat(price))) {
        dispatch(addExpenseAction({ name: expenseName, price }));
        setExpenseName("");
        setPrice("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
            value={expenseName}
            onChange={(e) => {
              setExpenseName(e.target.value);
            }}
            disabled={noIncome}
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            disabled={noIncome}
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button
            type="submit"
            className={`btn btn-primary ${s.btn}`}
            disabled={noIncome}
          >
            Add
          </button>
        </div>
      </div>
      {noIncome ? <p className={s.noIncome}>You have no income</p> : <></>}
    </form>
  );
}

import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    noIncome: false,
    expenseList: [],
    countActionPerformed: 0,
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    noIncomeAction: (currentSlice) => {
      currentSlice.noIncome =
        !currentSlice.income || isNaN(currentSlice.income);
    },
    incrementActionPerformed: (currentSlice) => {
      currentSlice.countActionPerformed++;
    },
  },
});

export const {
  addExpenseAction,
  setIncomeAction,
  noIncomeAction,
  incrementActionPerformed,
} = expenseSlice.actions;

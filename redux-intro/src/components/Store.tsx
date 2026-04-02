import React from "react";
import { createStore } from "redux";

type PropsInitialState = {
  balance: number;
  loan: number;
  loanPurpose: string;
};

type PropsActionType = {
  type: string;
  payload?: any;
};

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = (
  state: PropsInitialState = initialState,
  action: PropsActionType,
) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      //LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });

// store.dispatch({type: 'account/payLoan'});

const deposit = (amount: number) => {
  return { type: "account/deposit", payload: amount };
};

const withdraw = (amount: number) => {
  return { type: "account/withdraw", payload: amount };
};

const requestLoan = (amount: number, purpose: string) => {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
};

const payLoan = () => {
  return { type: "account/payLoan" };
};
store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(10000, "buy a car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

export const Store = () => {
  return <div></div>;
};

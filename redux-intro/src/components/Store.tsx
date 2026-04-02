import React from "react";
import { combineReducers, createStore } from "redux";

type PropsStateAccount = {
  balance: number;
  loan: number;
  loanPurpose: string;
};

type PropsStateCustomer = {
  fullname: string;
  nationalID?: string;
  createdAt?: string;
};

type PropsActionType = {
  type: string;
  payload?: any;
};

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullname: "",
  nationalID: "",
  createdAt: "",
};

const accountReducer = (
  state: PropsStateAccount = initialStateAccount,
  action: PropsActionType,
) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
   
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

const customerReducer = (
  state: PropsStateCustomer = initialStateCustomer,
  action: PropsActionType,
) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt
      };

    case "customer/updateName":
        return {
            ...state, fullName: action.payload
        }

    default:
      return state ;
  }
};

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

const store = createStore(rootReducer);

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




const createCustomer = (fullname: string, nationalID: string) => {
  return {
    type: "customer/createCustomer",
    payload: { fullname, nationalID, createdAt: new Date().toISOString() },
  };
};

const updateName = (fullname: string) => {
  return {
    type: "customer/updateName",
    payload: fullname,
  };
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


store.dispatch(createCustomer('Dmitriy', '21412312'))

console.log(store.getState())
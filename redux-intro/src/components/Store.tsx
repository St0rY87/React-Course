import React from "react";

type PropsInitialState = {
  balance: number;
  loan: number;
  loanPurpose: string;
};

type PropsActionType = {
  type: string;
  payload: any;
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
      return { ...state, loan: action.payload };
    case 'account/payLoan':
        return {...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan};

    default:
      return state;
  }
};

export const Store = () => {
  return <div></div>;
};

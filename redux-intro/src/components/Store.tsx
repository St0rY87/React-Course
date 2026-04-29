// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { accountReducer } from "../features/accounts/AccountSlice";
// import { customerReducer } from "../features/customers/CustomerSlice";
// import { thunk } from "redux-thunk";

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export {store};

import { combineReducers, createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      ///LATER
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
}

const store = createStore(reducer);







function deposit(amount:number) {
  return { type: "account/deposit", payload: amount }
}
function withdraw(amount:number) {
  return { type: "account/withdraw", payload: amount }
}

function requestLoan(amount: number, purpose: string) {
  return {
  type: "account/requestLoan",
  payload: { amount, purpose},
}
}
function payLoan() {
  return {type: 'account/payLoan'}
}


store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, "Buy a new car"));
store.dispatch(payLoan());
console.log(store.getState());


export { store };

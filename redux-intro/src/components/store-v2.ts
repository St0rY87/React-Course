import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { accountReducer } from "../features/accounts/accountSlice";
import { customerReducer } from "../features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export { store };

// import { combineReducers, createStore } from "redux";

// const initialStateAccount: StateAccountType = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// const initialStateCustomer: StateCustomerType = {
//   fullName: "",
//   nationalId: "",
//   createdAt: "",
// };

// type StateAccountType = {
//   balance: number;
//   loan: number;
//   loanPurpose: string;
// };

// type StateCustomerType = {
//   fullName: string;
//   nationalId: string;
//   createdAt: string;
// };

// export function accountReducer(
//   state = initialStateAccount,
//   action: { type: string; payload: any },
// ) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       ///LATER
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// }

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer
// });

// const store = createStore(rootReducer);

// function deposit(amount: number) {
//   return { type: "account/deposit", payload: amount };
// }

// function withdraw(amount: number) {
//   return { type: "account/withdraw", payload: amount };
// }

// function requestLoan(amount: number, purpose: string) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }

// function payLoan() {
//   return { type: "account/payLoan" };
// }

// function createCustomer(fullName: string, nationalId: string) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalId, createdAt: new Date().toISOString() },
//   };
// }

// function updateName(fullName: string) {
//   return { type: "account/updateName", payload: fullName };
// }

// function customerReducer(
//   state = initialStateCustomer,
//   action: { type: string; payload: any },
// ) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// store.dispatch(deposit(500));
// store.dispatch(withdraw(200));
// store.dispatch(requestLoan(1000, "Buy a new car"));
// store.dispatch(payLoan());
// console.log(store.getState());

// store.dispatch(createCustomer('Dmitriy Savin', '123'))
// store.dispatch(deposit(500))
// console.log(store.getState())

// export { store };

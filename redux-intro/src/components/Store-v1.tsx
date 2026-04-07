// import { combineReducers, createStore } from "redux";

// type PropsAction = {
//   type: string;
//   payload?: any;
// };

// type PropsStateCustomer = {
//   fullname: string;
//   nationalID?: string;
//   createdAt?: string;
// };

// const initialStateAccount = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// const initialStateCustomer = {
//   fullname: "",
//   nationalID: "",
//   createdAt: "",
// };

// function accountReducer(state = initialStateAccount, action: PropsAction) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       //later
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

// function deposit(amount: number) {
//   return { type: "account/deposit", payload: amount };
// }

// function withdraw(amount: number) {
//   return { type: "account/withdraw", payload: amount };
// }

// function requestLoan(amount: number, purpose: string) {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amount,
//       purpose,
//     },
//   };
// }

// function payLoan() {
//   return { type: "account/payLoan" };
// }

// const createCustomer = (fullname: string, nationalID: string) => {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullname, nationalID, createdAt: new Date().toISOString() },
//   };
// };

// const updateName = (fullname: string) => {
//   return {
//     type: "customer/updateName",
//     payload: fullname,
//   };
// };

// const customerReducer = (
//   state: PropsStateCustomer = initialStateCustomer,
//   action: PropsAction,
// ) => {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateName":
//       return {
//         ...state,
//         fullname: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// const store = createStore(rootReducer);

// store.dispatch(deposit(500));
// console.log(store.getState());
// store.dispatch(withdraw(200));
// console.log(store.getState());
// store.dispatch(requestLoan(15000, "Buy a car"));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());

// store.dispatch(createCustomer("Dmitriy", "3321992"));
// console.log(store.getState());
// store.dispatch(deposit(250));
// console.log(store.getState());
// store.dispatch(updateName("Dima"));
// console.log(store.getState());

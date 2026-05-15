import { createSlice } from "@reduxjs/toolkit";

// type PropsAction = {
//   type: string;
//   payload?: any;
// }

export type PropsStateCustomer = {
  fullName: string;
  nationalID?: string;
  createdAt?: string;
};

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {

    updateName(state, action) {
      state.fullName = action.payload;
    },

    createCustomer: {
      prepare(fullName: string, nationalID: string) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

// export const customerReducer = (
//   state: PropsStateCustomer = initialState,
//   action: PropsAction,
// ) => {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const createCustomer = (fullName: string, nationalID: string) => {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// };

// export const updateName = (fullName: string) => {
//   return {
//     type: "customer/updateName",
//     payload: fullName,
//   };
// };

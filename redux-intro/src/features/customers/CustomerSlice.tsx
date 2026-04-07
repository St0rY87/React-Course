
type PropsAction = {
  type: string;
  payload?: any;
}

type PropsStateCustomer = {
  fullName: string;
  nationalID?: string;
  createdAt?: string;
};



const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};




export const customerReducer = (
  state: PropsStateCustomer = initialStateCustomer,
  action: PropsAction,
) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
};

export const createCustomer = (fullName: string, nationalID: string) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
};

export const updateName = (fullName: string) => {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
};
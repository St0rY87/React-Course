
type PropsAction = {
  type: string;
  payload?: any;
}

type PropsStateCustomer = {
  fullname: string;
  nationalID?: string;
  createdAt?: string;
};



const initialStateCustomer = {
  fullname: "",
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
        fullname: action.payload.fullname,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return {
        ...state,
        fullname: action.payload,
      };

    default:
      return state;
  }
};

export const createCustomer = (fullname: string, nationalID: string) => {
  return {
    type: "customer/createCustomer",
    payload: { fullname, nationalID, createdAt: new Date().toISOString() },
  };
};

export const updateName = (fullname: string) => {
  return {
    type: "customer/updateName",
    payload: fullname,
  };
};
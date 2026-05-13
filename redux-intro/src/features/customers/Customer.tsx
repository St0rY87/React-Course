import { useSelector } from "react-redux";
import type { PropsStateCustomer } from "./CustomerSlice";

function Customer() {
  const customer = useSelector(
    (store: {customer: PropsStateCustomer }) => store.customer.fullName,
  );
  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
}

export { Customer };

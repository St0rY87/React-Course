import { CreateCustomer } from "./features/customers/CreateCustomer";
import { Customer } from "./features/customers/Customer";
import { AccountOperations } from "./features/accounts/AccountOperations";
import { useSelector } from "react-redux";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

function App() {
  const fullName = useSelector((state: any) => state.customer.fullName);

  return (
    <>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </>
  );
}

export default App;

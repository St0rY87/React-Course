import { CreateCustomer } from "./features/customers/CreateCustomer";
import { Customer } from "./features/customers/Customer";
import { AccountOperations } from "./features/accounts/AccountOperations";
import { BalanceDisplay } from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

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

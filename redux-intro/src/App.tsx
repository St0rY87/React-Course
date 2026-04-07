import { CreateCustomer } from "./features/customers/CreateCustomer";
import { Customer } from "./features/customers/Customer";
import { AccountOperations } from "./features/accounts/AccountOperations";
import { BalanceDisplay } from "./features/accounts/BalanceDisplay";

import { store } from "./components/Store";
import { deposit } from "./features/accounts/AccountSlice";

store.dispatch(deposit(500));
console.log(store.getState());

function App() {
  return (
    <>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </>
  );
}

export default App;

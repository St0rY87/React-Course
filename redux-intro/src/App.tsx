import { useState } from "react";
import { Store } from "./components/Store";
import { CreateCustomer } from "./components/CreateCustomer";
import { Customer } from "./components/Customer";
import { AccountOperations } from "./components/AccountOperations";
import { BalanceDisplay } from "./components/BalanceDisplay";
import "./components/Store";
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

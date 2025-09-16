import { useState } from "react";
import "./App.css";

function App() {
  function TipCalculator() {
    const [bill, setBill] = useState("");
    const [persentage1, setPersentage1] = useState(0);
    const [persentage2, setPersentage2] = useState(0);

    const tip = bill * ((persentage1 + persentage2) / 2 / 100);

    function resetForm() {
      setBill("");
      setPersentage1(0);
      setPersentage2(0);
    }

    return (
      <div>
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercentage persentage={persentage1} onSelect={setPersentage1}>
          How did you like the service
        </SelectPercentage>
        <SelectPercentage persentage={persentage2} onSelect={setPersentage2}>
          How did your friend like the service ?
        </SelectPercentage>
        {bill > 0 && (
          <>
            <Output bill={bill} tip={tip} />
            <Reset onResetForm={resetForm} />
          </>
        )}
      </div>
    );
  }

  function BillInput({ bill, onSetBill }) {
    return (
      <div>
        <label>How much was the bill ?</label>
        <input
          type="text"
          placeholder="Bill value"
          value={bill}
          onChange={(e) => {
            onSetBill(Number(e.target.value));
          }}
        />
      </div>
    );
  }

  function SelectPercentage({ children, persentage, onSelect }) {
    return (
      <div>
        <label>{children}</label>
        <select
          value={persentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was ok (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    );
  }

  function Output({ bill, tip }) {
    return (
      <h3>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h3>
    );
  }

  function Reset({ onResetForm }) {
    return <button onClick={onResetForm}>Reset</button>;
  }

  return (
    <>
      <TipCalculator />
    </>
  );
}

export default App;

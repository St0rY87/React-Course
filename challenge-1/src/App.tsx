import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [howYouLIke, setHowYouLIke] = useState("dissatisfied");
  const [howFriendLIke, setHowFriendLIke] = useState("dissatisfied");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function resetForm() {
    setBill("");
    setHowYouLIke("dissatisfied");
    setHowFriendLIke("dissatisfied");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bill">How much was the bill ?</label>
          <input
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            type="text"
            id="bill"
          />
        </div>
        <div>
          <label>How did you like the service ?</label>
          <select
            value={howYouLIke}
            onChange={(e) => setHowYouLIke(e.target.value)}
          >
            <option value="dissatisfied">Dissatisfied(0%)</option>
            <option value="ok">It was ok(5%)</option>
            <option value="amazing">It was amazing(10%)</option>
            <option value="absolutely">Absolutely amazing(20%)</option>
          </select>
        </div>
        <div>
          <label>How did your friend like the service ?</label>
          <select
            value={howFriendLIke}
            onChange={(e) => setHowFriendLIke(e.target.value)}
          >
            <option value="dissatisfied">Dissatisfied(0%)</option>
            <option value="ok">It was ok(5%)</option>
            <option value="amazing">It was amazing(10%)</option>
            <option value="absolutely">Absolutely amazing(20%)</option>
          </select>
        </div>

        <p className="total">You pay X (X + X)</p>

        <button onClick={resetForm}>Reset</button>
      </form>
    </>
  );
}

export default App;

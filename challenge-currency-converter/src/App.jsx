import { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

function App() {
  const [value, setValue] = useState("1");
  const [cur1, setCur1] = useState("USD");
  const [cur2, setCur2] = useState("EUR");
  const [converted, setConverted] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function() {
    async function convert() {
      setIsLoading(true);
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${value}&from=${cur1}&to=${cur2}`
    );
    const data = await res.json();
    setConverted(data.rates[cur2]);
    setIsLoading(false);
  }
  if (cur1 === cur2) return (setConverted(value));
  convert();
}, [value, cur1, cur2]);

  return (
    <div>
      <input
        type="text"
        value={value}
        disabled={isLoading}
        onChange={(e) =>
          setValue(
            Number.isInteger(Number(e.target.value))
              ? Number(e.target.value)
              : value
          )
        }
      />
      <select value={cur1} onChange={(e) => setCur1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={cur2} onChange={(e) => setCur2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading ? <p>Loading...</p>:<p>{converted} {cur2}</p>}
      
    </div>
  );
}

export default App;

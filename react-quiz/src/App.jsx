import { useEffect, useReducer } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const initialState = {
  questions: [],
  // 'loading', 'ready', 'error', 'active', 'finished'
  status: "loading",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "dataReceived":
      return {
        ...state,
        questions: payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <MainContent>
        <p>1/15</p>
        <p>Question?</p>
      </MainContent>
    </div>
  );
}

export default App;

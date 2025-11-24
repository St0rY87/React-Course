import { useEffect, useReducer } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";

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
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

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
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
      </MainContent>
    </div>
  );
}

export default App;

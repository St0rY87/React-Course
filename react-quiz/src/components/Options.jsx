function Option({ objQuestion, dispatch, answer }) {
  const hasAnswered = answer !== null;

  const { options, correctOption } = objQuestion;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} 
          ${
            hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
          }`}
          disabled={hasAnswered}
          key={crypto.randomUUID()}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: index });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;

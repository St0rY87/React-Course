import Option from "./Options";

function Question({ objQuestion, dispatch, answer }) {
  console.log(objQuestion);
  const {question} = objQuestion
  return (
    <div>
      <h4>{question}</h4>
      <div className="options">
        <Option objQuestion={objQuestion} dispatch={dispatch} answer={answer} />
      </div>
    </div>
  );
}

export default Question;

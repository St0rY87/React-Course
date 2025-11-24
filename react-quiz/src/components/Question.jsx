import Option from "./Options";

function Question({ objQuestion }) {
  console.log(objQuestion);
  const {question} = objQuestion
  return (
    <div>
      <h4>{question}</h4>
      <div className="options">
        <Option objQuestion={objQuestion} />
      </div>
    </div>
  );
}

export default Question;

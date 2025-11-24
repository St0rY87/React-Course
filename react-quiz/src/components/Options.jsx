function Option({objQuestion}) {
  const {options} = objQuestion;
    return (
        <div className="options">
        {options.map(option=><button className="btn btn-option" key={crypto.randomUUID()}>{option}</button>)}
      </div>
    )
}

export default Option

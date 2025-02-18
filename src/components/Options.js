function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((x) => (
        <button className="btn btn-option" key={x}>
          {x}
        </button>
      ))}
    </div>
  );
}

export default Options;

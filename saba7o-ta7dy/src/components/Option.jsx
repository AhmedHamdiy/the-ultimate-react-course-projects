/* eslint-disable react/prop-types */
function Option({
  index,
  option,
  userAnswer,
  correctAnswer,
  isAnswered,
  dispatch,
}) {
  return (
    <li
      className={`option ${
        !isAnswered
          ? ""
          : index === correctAnswer
          ? "correct-answer"
          : index === userAnswer
          ? "wrong-answer"
          : ""
      }
      `}
      onClick={() => {
        if (!isAnswered) dispatch({ type: "newAnswer", payload: index });
      }}
    >
      <p>{option}</p>
    </li>
  );
}

export default Option;

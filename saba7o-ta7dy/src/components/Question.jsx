/* eslint-disable react/prop-types */
import Option from "./Option";
function Question({ question, userAnswer, isAnswered, dispatch }) {
  return (
    <>
      <h2 className="question-header">{question.question}</h2>

      <ul className="options">
        {question.options.map((option, index) => (
          <Option
            key={option}
            index={index}
            option={option}
            isAnswered={isAnswered}
            correctAnswer={question.answer}
            userAnswer={userAnswer}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </>
  );
}

export default Question;

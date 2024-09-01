/* eslint-disable react/prop-types */
import Progress from "../Progress";
import Timer from "../Timer";
import QuestionFooter from "../QuestionFooter";
import Question from "../Question";
import CustomButton from "../CustomButton";

function QuestionScreen({
  index,
  numQuestions,
  questions,
  answers,
  points,
  maxPoints,
  secondsRemaining,
  dispatch,
}) {
  return (
    <div className="question-screen screen">
      <Progress
        index={index}
        points={points}
        numQuestions={questions.length}
        maxPoints={maxPoints}
        answers={answers}
      />
      <Question
        question={questions[index]}
        answersLength={answers.length}
        isAnswered={answers.length > index}
        userAnswer={answers.length > index ? answers[index] : null}
        dispatch={dispatch}
      />
      <QuestionFooter>
        <CustomButton
          content="Back"
          className="step-btn  back-btn"
          disable={index === 0}
          onClick={() => dispatch({ type: "step", payload: -1 })}
        />
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
        {index < numQuestions - 1 ? (
          <CustomButton
            content="Next"
            className="step-btn next-btn"
            disable={answers.length <= index}
            onClick={() => dispatch({ type: "step", payload: 1 })}
          />
        ) : (
          <CustomButton
            content="Finish"
            className="step-btn  finish-btn"
            disable={false}
            onClick={() => dispatch({ type: "finish" })}
          />
        )}
      </QuestionFooter>
    </div>
  );
}

export default QuestionScreen;

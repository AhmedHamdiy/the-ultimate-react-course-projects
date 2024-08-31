/* eslint-disable react/prop-types */
function QuestionsMenu({ questions, index }) {
  return (
    <ul className="questions-menu">
      {questions.map((question, i) => (
        <li
          className={`question-tap ${index == i ? "active-question" : ""}`}
          key={question.question}
        >
          Q.{i + 1}
        </li>
      ))}
    </ul>
  );
}

export default QuestionsMenu;

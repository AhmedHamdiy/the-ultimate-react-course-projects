/* eslint-disable react/prop-types */
function Progress({ index, numQuestions, points, maxPoints, answers }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={answers.length} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;

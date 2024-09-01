function PreviousButton({ disabled, dispatch }) {
  if (disabled) return null;
  return <button onClick={() => dispatch({ type: "stepBack" })}>back</button>;
}

export default PreviousButton;

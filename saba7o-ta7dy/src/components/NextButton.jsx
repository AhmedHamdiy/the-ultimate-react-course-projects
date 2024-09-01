/* eslint-disable react/prop-types */
function NextButton({ toggled, disabled, content, dispatch }) {
  if (disabled) return null;
  return (
    <>
      {disabled ? null : toggled ? (
        <button
          className="btn-ui btn-next"
          onClick={() => dispatch({ type: "step", payload: 1 })}
        >
          {content}
        </button>
      ) : (
        <button
          className="btn-ui btn-finish"
          onClick={() => dispatch({ type: "finish" })}
        >
          {content}
        </button>
      )}
      ;
    </>
  );
}

export default NextButton;

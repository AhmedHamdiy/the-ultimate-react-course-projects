/* eslint-disable react/prop-types */
function CustomButton({ disable, content, className, onClick }) {
  return (
    <button
      className={className + (disable ? " disable" : "")}
      onClick={onClick}
      disabled={disable}
    >
      {content}
    </button>
  );
}

export default CustomButton;

function StartScreen({ dispatch }) {
  return (
    <div className="start-screen screen">
      <h2>Test your football knowledge</h2>
      <p>Discover how much you famous players.</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "dataLoading" })}
      >
        Choose A Player
      </button>
    </div>
  );
}

export default StartScreen;

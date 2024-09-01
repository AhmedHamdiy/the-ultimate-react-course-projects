function ErrorScreen({ errorMsg }) {
  return (
    <div className="error-screen screen">
      <h2 className="error">⛔️ {errorMsg}</h2>
    </div>
  );
}

export default ErrorScreen;

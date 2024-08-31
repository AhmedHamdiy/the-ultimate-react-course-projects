import { useEffect } from "react";

function LoaderScreen({ dispatch }) {
  useEffect(
    function () {
      async function fetchPlayers() {
        try {
          const res = await fetch(`http://localhost:8000/players`);
          const data = await res.json();
          dispatch({ type: "dataFetched", payload: data });
        } catch {
          dispatch({
            type: "dataFailed",
            payload: "There was an error loading players...",
          });
        }
      }
      fetchPlayers();
    },
    [dispatch]
  );
  return (
    <div className="loader-screen screen">
      <span className="loader"> </span>
    </div>
  );
}

export default LoaderScreen;

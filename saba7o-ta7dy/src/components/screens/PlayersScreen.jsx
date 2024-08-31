/* eslint-disable react/prop-types */
import PlayerCard from "../PlayerCard";
function PlayersScreen({ players, dispatch, selectedPlayer }) {
  return (
    <div className="players-screen screen">
      <h1>Choose A Player</h1>
      <ul className="players-list">
        {players.map((player) => (
          <PlayerCard
            player={player}
            dispatch={dispatch}
            key={player.name}
            selectedPlayer={selectedPlayer}
          />
        ))}
      </ul>
      <button
        disabled={!selectedPlayer}
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
}

export default PlayersScreen;

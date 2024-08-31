/* eslint-disable react/prop-types */
function PlayerCard({ player, dispatch, selectedPlayer }) {
  return (
    <li
      className={`player-card ${
        selectedPlayer && selectedPlayer.name === player.name
          ? "active-player-card"
          : ""
      }`}
      onClick={() => dispatch({ type: "selectingPlayer", payload: player })}
    >
      <img src={player.img} alt={player.name} />
    </li>
  );
}

export default PlayerCard;

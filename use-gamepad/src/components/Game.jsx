/* eslint-disable react/prop-types */
import defaultGame from "../assets/default-game.svg";
export default function Game({ game, onSelect }) {
  return (
    <li className="game" onClick={() => onSelect(game.id)}>
      <img
        src={game.background_image ? game.background_image : defaultGame}
        alt={game.name}
      />
      <h3>{game.name}</h3>
      <p>{game.released}</p>
      <p> ⭐️ {game.rating} </p>
    </li>
  );
}

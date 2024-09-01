/* eslint-disable react/prop-types */
import Game from "./Game";
export default function GameList({ games, onSelect }) {
  return (
    <ul className={`list ${games.length > 5 ? "scrollable" : ""}`}>
      {games.map((game) => (
        <Game game={game} onSelect={onSelect} key={game.name} />
      ))}
    </ul>
  );
}

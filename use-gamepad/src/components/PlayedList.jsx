/* eslint-disable react/prop-types*/
import Played from "./Played";

export default function PlayedList({ playedGames, onDelete }) {
  return (
    <>
      <ul className="list list-played">
        {playedGames.map((game) => (
          <Played game={game} onDelete={onDelete} key={game.name} />
        ))}
      </ul>
    </>
  );
}

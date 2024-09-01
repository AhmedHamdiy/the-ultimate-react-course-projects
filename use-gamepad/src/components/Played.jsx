/* eslint-disable react/prop-types */
export default function Played({ game, onDelete }) {
  return (
    <li className="played-book">
      <img src={game.background_image} alt={game.name} />
      <div className="info">
        <h4>{game.name}</h4>
        <p>Rating: {game.rating}</p>
        <p>My Rating: {game.myRating}</p>
        <p>Release Date: {game.released.substr(0, 4)}</p>
        <button className="close-btn" onClick={() => onDelete(game.id)}>
          x
        </button>
      </div>
      <p>Genres: {game.genres}</p>
    </li>
  );
}

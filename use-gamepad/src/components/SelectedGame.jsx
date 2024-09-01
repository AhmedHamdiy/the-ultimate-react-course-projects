/* eslint-disable react/prop-types */
import defaultGame from "../assets/default-game.svg";

import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import Error from "./Error";
const API_KEY = "d164bb485ae448368cb340c83cae7dd9";

export default function SelectedGame({ id, onAdd, playedGames, onCloseGame }) {
  const [game, setGame] = useState({});
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPlayed, setIsPlayed] = useState(false);
  useEffect(() => {
    const playedGame = playedGames.find((p) => p.id === id);
    if (playedGame) {
      setIsPlayed(true);
      setGame(playedGame);
      setRating(playedGame.myRating);
      return;
    }
    setIsPlayed(false);

    async function fetchGame() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
        );
        const result = await res.json();
        setGame(result);
        console.log(result.description_raw);
        console.log(result.description_raw.length);
      } catch (e) {
        console.error(e.message);
        setError("Error in Fetching Game Details");
      } finally {
        setIsLoading(false);
      }
    }
    fetchGame();
  }, [id, playedGames]);

  useEffect(
    function () {
      if (!game.name) return;
      document.title = `Game | ${game.name}`;
      return () => (document.title = "useGamepad");
    },
    [game.name]
  );

  function addGame() {
    const Game = {
      id: game.id,
      background_image: game.background_image || defaultGame,
      name: game.name,
      rating: game.rating,
      myRating: rating,
      released: game.released,
      genres: game.genres?.map((genre) => genre.name).join(", "),
    };
    onAdd(Game);
  }
  return (
    <div className="details">
      {error ? (
        <Error message={error} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseGame}>
              &larr;
            </button>
            <img
              src={game.background_image || defaultGame}
              alt={`Cover of ${game.name} game`}
            />
            <div className="details-overview">
              <h2>{game.name}</h2>
              <p>{game.released}</p>
              <p>{game.genres?.map((genre) => genre.name).join(", ")}</p>
              <p>
                <span>⭐️</span>
                {game.rating} on Steam
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isPlayed ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={32}
                    onSetRating={setRating}
                  />
                  {rating > 0 && (
                    <button className="btn" onClick={addGame}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {rating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p
              className={`description ${
                game.description_raw?.length > 3 ? "scrollable" : ""
              }`}
            >
              {game.description_raw}
            </p>
          </section>
        </>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NumResults from "./components/NumResults";
import Search from "./components/Search";
import GameList from "./components/GameList";
import SelectedGame from "./components/SelectedGame";
import PlayedList from "./components/PlayedList";
import PlayedSummary from "./components/PlayedSummary";
import Box from "./components/Box";
import Error from "./components/Error";
import Loader from "./components/Loader";

const API_KEY = "d164bb485ae448368cb340c83cae7dd9";

export default function App() {
  const [games, setGames] = useState([]);
  const [playedGames, setPlayedGames] = useState([]);
  const [selectedId, setSelectedID] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(
    function () {
      if (query.length < 3) {
        setGames([]);
        setError("");
        return;
      }

      setIsLoading(true);
      async function fetchGames() {
        try {
          const res = await fetch(
            `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(
              query
            )}`
          );
          const data = await res.json();
          setGames(data.results);
        } catch {
          setError("Error In Fetching Games Data");
        } finally {
          setIsLoading(false);
        }
      }
      fetchGames();
    },
    [query]
  );
  function addGame(game) {
    setPlayedGames([...playedGames, game]);
    setSelectedID(null);
  }

  function removeGame(id) {
    setPlayedGames(playedGames.filter((game) => game.id !== id));
  }
  function handleCloseGame() {
    setSelectedID(null);
  }
  useEffect(
    function () {
      localStorage.setItem("playedGames", JSON.stringify(playedGames));
    },
    [playedGames]
  );

  return (
    <>
      <Navbar>
        <Search query={query} onQuery={setQuery} />
        <NumResults numResults={games.length} />
      </Navbar>
      <Main>
        <Box boxSize="40rem">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
          ) : (
            <GameList
              games={games}
              onSelect={(id) =>
                setSelectedID((selectedId) => (id === selectedId ? null : id))
              }
            />
          )}
        </Box>
        <Box boxSize="70rem">
          {selectedId ? (
            <SelectedGame
              id={selectedId}
              onAdd={addGame}
              playedGames={playedGames}
              onCloseGame={handleCloseGame}
            />
          ) : (
            <>
              <PlayedSummary playedGames={playedGames} />
              <PlayedList playedGames={playedGames} onDelete={removeGame} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

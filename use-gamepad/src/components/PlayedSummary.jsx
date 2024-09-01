/* eslint-disable react/prop-types */
export default function PlayedSummary({ playedGames }) {
  let avgRating = playedGames.reduce(
    (s, c, i, arr) => s + Number(c.rating) / arr.length,
    0
  );
  let avgMyRating = playedGames.reduce(
    (s, c, i, arr) => s + Number(c.myRating) / arr.length,
    0
  );
  return (
    <div className="summary">
      <h2>Games you played</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{playedGames.length} games</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgMyRating.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

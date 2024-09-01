/* eslint-disable react/prop-types */

export default function Search({ query, onQuery }) {
  return (
    <input
      className="search"
      type="text"
      value={query}
      onChange={(e) => onQuery(e.target.value)}
      placeholder="Search for a game"
    />
  );
}

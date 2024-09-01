/* eslint-disable react/prop-types */
export default function NumResults({ numResults }) {
  return (
    <p className="num-results">
      Found <strong>{numResults}</strong> results
    </p>
  );
}

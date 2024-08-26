import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReadBook from "./ReadBook";
ReadBooksList.propTypes = {
  readBooks: PropTypes.array,
  avgRate: PropTypes.number,
  avgMyRate: PropTypes.number,
  onDelete: PropTypes.func,
  onClear: PropTypes.func,
};
export default function ReadBooksList({
  readBooks,
  avgRate,
  avgMyRate,
  onDelete,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("rating");
  const [renderedBooks, setRenderedBooks] = useState([]);
  useEffect(() => {
    const sortedBooks = readBooks.sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      if (sortBy === "myRating") {
        return b.myRating - a.myRating;
      }
      if (sortBy === "releaseDate") {
        return b.releaseDate - a.releaseDate;
      }
    });
    setRenderedBooks(sortedBooks);
  }, [sortBy, readBooks]);
  return (
    <>
      <h2>Read Books</h2>
      <p>Average Rating: {avgRate.toFixed(2)}</p>
      <p>Your Average Rating: {avgMyRate.toFixed(2)}</p>
      <h3>Books</h3>
      <div className="btns-container">
        <button className="btn" onClick={onClear}>
          Clear All
        </button>
        <button className="btn" onClick={() => setSortBy("rating")}>
          Sort By Rating
        </button>
        <button className="btn" onClick={() => setSortBy("myRating")}>
          Sort By My Rating
        </button>
        <button className="btn" onClick={() => setSortBy("releaseDate")}>
          Sort By Release Date
        </button>
      </div>
      <ul className="list list-read">
        {renderedBooks.map((book) => (
          <ReadBook book={book} onDelete={onDelete} key={book.name} />
        ))}
      </ul>
    </>
  );
}

import React, { useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
export default function SelectedBook({ id, onRead, onCloseBook }) {
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {
    title,
    coverPage,
    rating: avgRating,
    releaseDate,
    genre,
    summary,
    pages,
    goodReadsRating,
  } = book;
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseBook}>
              &larr;
            </button>
            <img src={coverPage} alt={`Cover of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {releaseDate} &bull; {pages}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {goodReadsRating} GoodReads rating
              </p>
            </div>
          </header>

          {/* <p>{avgRating}</p> */}

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

const book = {
  id: 1,
  title: "The Alchemist",
  coverPage: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
  rating: 4.5,
  releaseDate: "1988",
  genre: "Adventure",
  summary: `The Alchemist follows the journey of an Andalusian shepherd
          named Santiago. Believing a recurring dream to be prophetic, he
          asks a Romani fortune-teller in a nearby town about its meaning.`,
};

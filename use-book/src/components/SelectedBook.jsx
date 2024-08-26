import React, { useState } from "react";
import StarRating from "./StarRating";
export default function SelectedBook({ id, onRead }) {
  const book = {
    id: 1,
    title: "The Alchemist",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.5,
    releaseDate: "1988",
    genre: "Adventure",
    summary: `The Alchemist follows the journey of an Andalusian shepherd
        named Santiago. Believing a recurring dream to be prophetic, he
        asks a Romani fortune-teller in a nearby town about its meaning.`,
  };
  const [rating, setRating] = useState(0);
  return (
    <div className="details">
      <header>
        <h1>{book.title}</h1>
        <img src={book.img} />
      </header>
      <section>
        <div className="rating">
          <StarRating
            maxRating={10}
            onSetRating={setRating}
            size={24}
            defaultRating={0}
          />
        </div>
        <div className="details-overview">
          <h2>Overview</h2>
          <p>{book.summary}</p>
        </div>
        <button onClick={() => onRead(id)}>Read</button>
      </section>
    </div>
  );
}

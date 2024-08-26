export default function ReadBook({ book, onDelete }) {
  const abook = {
    id: 1,
    title: "The Great Gatsby",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.3,
    myRating: 4.7,
    releaseDate: "1925",
  };
  const { id, title, img, rating, myRating, releaseDate } = abook;
  return (
    <li className="read-book">
      <img src={img} alt={title} />
      <div className="info">
        <h4>{title}</h4>
        <p>Rating: {rating}</p>
        <p>My Rating: {myRating}</p>
        <p>Release Date: {releaseDate}</p>
        <button className="btn" onClick={() => onDelete(id)}>
          Remove
        </button>
      </div>
    </li>
  );
}

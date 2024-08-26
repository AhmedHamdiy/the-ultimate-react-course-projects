export default function Book({ book, onSelect }) {
  const { id, title, img, rating, releaseDate } = book;
  return (
    <li onClick={() => onSelect(id)}>
      <img src={img} />
      <h3>{title}</h3>
      <p>{releaseDate}</p>
      <p>{rating} ⭐️</p>
    </li>
  );
}

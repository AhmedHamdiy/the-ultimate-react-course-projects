/* eslint-disable react/prop-types */
import Book from "./Book";
export default function Booklist({ books, onSelect }) {
  return (
    <ul className={`list ${books.length > 5 ? "scrollable" : ""}`}>
      {books.map((book) => (
        <Book book={book} onSelect={onSelect} key={book.name} />
      ))}
    </ul>
  );
}

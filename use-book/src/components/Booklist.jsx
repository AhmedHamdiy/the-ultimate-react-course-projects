import PropTypes from "prop-types";
import Book from "./Book";

Booklist.propTypes = {
  books: PropTypes.array,
  onSelect: PropTypes.func,
};
export default function Booklist({ books, onSelect }) {
  return (
    <ul className="list">
      {books.map((book) => (
        <Book book={book} onSelect={onSelect} key={book.name} />
      ))}
    </ul>
  );
}

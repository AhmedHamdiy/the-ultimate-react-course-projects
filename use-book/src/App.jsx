import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NumResults from "./components/NumResults";
import Search from "./components/Search";
import Booklist from "./components/Booklist";
import SelectedBook from "./components/SelectedBook";
import ReadBooksList from "./components/ReadBooksList";
import Box from "./components/Box";

export default function App() {
  // const [books, setBooks] = useState([]);
  // const [readBooks, setReadBooks] = useState([]);
  const [books, setBooks] = useState(initialBooks);
  const [readBooks, setReadBooks] = useState(initialReadBooks);
  const [selectedId, setSelectedID] = useState(0);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let avgRating = books.reduce((s, c, i, arr) => s + c / arr.length, 0);
  let avgMyRating = readBooks.reduce((s, c, i, arr) => s + c / arr.length, 0);
  function readBook(book) {
    setReadBooks([...readBooks, book]);
  }
  function removeBook(id) {
    setReadBooks(readBooks.filter((b) => b.id !== id));
  }
  return (
    <React.Fragment>
      <Navbar>
        <Search query={query} onQuery={setQuery} />
        <NumResults numResults={books.length} />
      </Navbar>
      <main>
        <Box>
          <Booklist
            books={books}
            onSelect={(id) =>
              setSelectedID((selectedId) => (id === selectedId ? null : id))
            }
          />
        </Box>
        <Box>
          {selectedId ? (
            <SelectedBook id={selectedId} onRead={readBook} />
          ) : (
            <ReadBooksList
              readBooks={readBooks}
              avgRate={avgRating}
              avgMyRate={avgMyRating}
              onDelete={removeBook}
            />
          )}
        </Box>
      </main>
    </React.Fragment>
  );
}
const initialBooks = [
  {
    id: 1,
    title: "The Alchemist",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.5,
    releaseDate: "1988",
  },
  {
    id: 2,
    title: "The Little Prince",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.8,
    releaseDate: "1943",
  },
  {
    id: 3,
    title: "The Da Vinci Code",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.2,
    releaseDate: "2003",
  },
  {
    id: 4,
    title: "The Hobbit",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.9,
    releaseDate: "1937",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.1,
    releaseDate: "1951",
  },
  {
    id: 6,
    title: "The Great Gatsby",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.3,
    releaseDate: "1925",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.3,
    releaseDate: "1925",
  },
  {
    id: 4,
    title: "The Hobbit",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.9,
    releaseDate: "1937",
  },
];
const initialReadBooks = [
  {
    id: 1,
    title: "The Alchemist",
    img: "https://m.media-amazon.com/images/I/41aM3QGf8ML.jpg",
    rating: 4.5,
    myRating: 4.7,
    releaseDate: "1988",
  },
];

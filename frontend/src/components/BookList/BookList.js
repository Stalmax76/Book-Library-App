import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators';
import './BookList.css';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  const handelDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p> No books available </p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. Book is: <i> {book.title} </i>by :{' '}
                <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>

                <button onClick={() => handelDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;

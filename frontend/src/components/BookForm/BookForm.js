import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBook } from '../../redux/slices/booksSlice';
// import { addBook } from '../../redux/books/actionCreators';
import booksData from '../../data/books.json';
import './BookForm.css';
import createBookWithId from '../../utils/createBookWithId';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  //  create random book
  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    dispatch(addBook(createBookWithId(randomBook, 'random')));
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault(); // dispatch action
    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author }, 'manual')));
      setAuthor('');
      setTitle('');
    }
  };

  const handleAddRandomBookViaAPI = () => {
    dispatch(fetchBook());
  };
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"> Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="author"> Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomBookViaAPI}>
          Add Random via API
        </button>
      </form>
    </div>
  );
};

export default BookForm;

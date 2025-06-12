import { createContext, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/books"; // in a real app this wiil be the BE URL

export const BooksContext = createContext();

export function BooksProvider({children}) {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get(API_URL);
        setBooks(response.data);
    };

    const deleteBook = async (id) => {
    await axios.delete(`${API_URL}/${id}`);

    // we will use filter function in the array

    setBooks(books.filter((book) => book.id !== id));
  }

  const editBook = async (id, newTitle) => {
    const orig = books.find((book) => book.id === id);
    const res = await axios.put(`${API_URL}/${id}`, {
        ...orig,
        title: newTitle
    });
    setBooks(books.map((bk) => (
      (bk.id === id ? res.data : bk
      ))));
  };
    
     const createBook = async (title) => {
        // I have the title of the book and with that title I want to submit the book to the server

        // with title what can I do?
        // axios
        const image = `https://picsum.photos/seed/${Math.floor(
          Math.random() * 1000
        )}/200/300`;
        const response = await axios.post(API_URL, {title, image});
        console.log(response);
        // I have the newly added Book
        // I need to add the newly added to the list of Books
        setBooks([...books, response.data]);
    };

    return <BooksContext.Provider value={{books, fetchBooks, createBook, deleteBook, editBook}}>
        {children}
      </BooksContext.Provider>;
}


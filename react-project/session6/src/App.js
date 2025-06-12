// import { useState } from 'react';
import './App.css';
// import axios from 'axios';
import { useContext, useEffect } from "react";
import BookCreate from './components/book/BookCreate';
import BookList from "./components/book/BookList";
import { BooksContext } from "./context/BooksContext";
// import MountExample from './components/MountExample';
// import ConditionalEffect from "./components/ConditionalEffect";



function App() {

  const {fetchBooks} = useContext(BooksContext) ?? {}; // nullish coalescing operator (??) // provides a fallback empty object
  // useContext(BooksContext) returns null or undefined, when useContext(BooksContext) is used outside of a <BooksProvider> in the React component tree.
  // destructuring doesn't throw an error if useContext(BooksContext) returns null or undefined
 
  useEffect(() => {
      fetchBooks();
  }, [fetchBooks]);

  // const [show, setShow] = useState(true);
  return (
    <div>
      {/* <button onClick={() => setShow(!show)}>Show/Hide
      {show ? "hide":"show"}</button>

      {show && <MountExample />} 
      <ConditionalEffect /> */}
      <h1>Books </h1>
      {/* for providing the component think about functionality
      1. Creating ook
    ==submittng the data
  ** only the title of the book
2. List Book
== having fetched data from a source and populte the subcomponents

3. Show book
*/}
<BookCreate />
<BookList />

    </div>
  );
}

export default App;

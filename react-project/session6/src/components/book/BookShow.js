import { useContext, useState } from "react";
// import {editBook, deleteBook} from "./BooksContext";
import { BooksContext } from "../../context/BooksContext";

export default function BookShow({book}) {

    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(book.title); // the initial value of new title is the Old title of the book
    const {deleteBook, editBook} = useContext(BooksContext) ?? {};

    const handleEdit =  () => {
            editBook(book.id, newTitle);
            setEditing(false);
    }

    return <div>
                <img src={book.image} alt={book.title} style={{height: "100px"}}/>
                {editing ? (
                    <>
                        <input value = {newTitle} 
                        onChange={(e) => setNewTitle(e.target.value)}> </input>
                        <button onClick={handleEdit}>Save</button>
                
                    </>
                        ):(
                            <>
                                <h3>{book.title}</h3>
                                <button onClick={() => setEditing(true)}>Edit</button>
                            </>
                        )}
                <button onClick={()=> deleteBook(book.id)}> Delete </button>
        </div>
}
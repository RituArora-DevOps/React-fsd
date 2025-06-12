import { useContext, useState } from "react";
import { BooksContext } from "../../context/BooksContext";
//import axios from "axios";
export default function BookCreate() {

    const [title, setTitle] = useState("");
    const {createBook} = useContext(BooksContext) ?? {};

    //const API_URL = "http://localhost:3001/books"; // in a real app this wiil be the BE URL

    const handleSubmit = (e) => {
        e.preventDefault();
        createBook(title);
    }
   
    return <div>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder = "Enter book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{marginRight: "10px"}}/>
            <button type="submit">Add Book</button>
        </form>
    </div>;
}

 
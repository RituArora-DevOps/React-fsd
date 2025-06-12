import React from 'react'
import { useState } from 'react';

export default function SearchBar({onSubmit}) {
   const [term, setTerm] = useState("");

   const handleChange = (event) => {
       event.preventDefault();
       setTerm(event.target.value);
   }

   const handleFormSubmit = (event) => {
       event.preventDefault(); // Stop the browser's default form submission (which would reload the page)
       //In React apps, we prevent that behavior because we want to handle everything with JavaScript (without a full page reload).
       onSubmit(term); // Call the parent component's `onSubmit` function, passing the current search term

   }

  return (
    <div className="border border-grey-300 rounded px-4 py-2 flex flex-col">
      <form onSubmit={handleFormSubmit}>
        <label>Enter your search Term: </label> 
        <input type="text" placeholder="Search..." value={term} onChange={handleChange} required/>
        <button type="submit" value>Search</button>
      </form>
    </div>
  )
}

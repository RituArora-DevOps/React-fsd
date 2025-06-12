import { useState } from 'react';

import SearchBar from '../component/SearchBar';
import MovieList from "../component/MovieList";
import { searchMovies } from '../api';
const Home = () => {
  const [resultMovies, setResultMovies] = useState([]);

  const onSubmitForm = async (term) => {
    if (term === "") return;  
    const result = await searchMovies(term);
    console.log(result);
    setResultMovies(result);    
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmitForm} />
      <MovieList movies={resultMovies} />
    </div>
  )
}

export default Home

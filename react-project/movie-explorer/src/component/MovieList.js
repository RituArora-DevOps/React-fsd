import MovieShow from './MovieShow';

const MovieList = ({movies}) => {
  const renderedMovies = movies.map((movie) => (
     <MovieShow key={movie.id} movie={movie} />
    ));

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         {renderedMovies}  
      </div>
    </div>
  )
}

export default MovieList

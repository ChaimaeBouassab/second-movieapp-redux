import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Link
          key={index}
          to={`/trailer/${encodeURIComponent(movie.description)}/${encodeURIComponent(movie.trailerLink)}`}
        >
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
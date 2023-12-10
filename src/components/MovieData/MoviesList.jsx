import React, { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                height="300"
              />
            ) : (
              <img
                src="https://placehold.it/300x450?text=Image_not_found"
                alt={movie.title || 'Image not found'}
                height="300"
              />
            )}
            <h2>{movie.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

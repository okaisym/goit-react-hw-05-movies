import React, { useLocation } from 'react-router-dom';
import {MovieCard, MovieListTitle, MovieListElement, MovieLink, MovieListItem, MoviePoster} from './MovieList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <MovieListElement>
      {movies.map((movie) => (
        <MovieListItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <MovieCard>
            {movie.poster_path ? (
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                height="300"
              />
            ) : (
              <MoviePoster
                src="https://placehold.it/300x450?text=Image_not_found"
                alt={movie.title || 'Image not found'}
                height="300"
              />
            )}
            <MovieListTitle>{movie.title}</MovieListTitle>
            </MovieCard>
            </MovieLink>
        </MovieListItem>
      ))}
    </MovieListElement>
  );
}

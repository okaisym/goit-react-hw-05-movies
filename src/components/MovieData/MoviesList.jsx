import React, { useLocation } from 'react-router-dom';
import {MovieCard, MovieListTitle, MovieListElement, MovieLink, MovieListItem, MoviePoster} from './MovieList.styled';
import {getPoster} from 'api';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <MovieListElement>
      {movies.map((movie) => (
        <MovieListItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <MovieCard>
              <MoviePoster
                src={getPoster(movie.poster_path)}
                alt={movie.title}
                height="300"
          />
            <MovieListTitle>{movie.title}</MovieListTitle>
            </MovieCard>
            </MovieLink>
        </MovieListItem>
      ))}
    </MovieListElement>
  );
}

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { searchMovies } from 'api';
import MoviesList from '../components/MovieData/MoviesList';

export default function MoviesPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const handleSearch = async () => {
      try {
        setLoading(true);
        const results = await searchMovies(query);
        setSearchResults(results);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [query, searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.search.value.trim().toLowerCase();
    setSearchParams({ query: value });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" autoComplete="off" autoFocus placeholder="Search movies" name="search" />
          <button type="submit">Submit</button>
        </form>
      </div>

      {isLoading && <Loader />}

      {isError && <div>Oops! Something went wrong!</div>}
      {searchResults.length > 0 && <MoviesList movies={searchResults} />}
    </>
  );
}

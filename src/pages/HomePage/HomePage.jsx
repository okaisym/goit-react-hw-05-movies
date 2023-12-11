import { fetchTrendingMovies } from 'api';
import { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';
import MoviesList from '../../components/MovieData/MoviesList';
import { TrendingTitle } from './HomePage.styled';


export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchTrendingMovies();
        const newMovies = response.data.results;

        if (newMovies.length === 0) {
          console.error('No movies found');
        } else {
          setMovies([...newMovies]);
        }
      } catch (error) {
        console.error('Something went wrong!...');
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isError && <div>Error fetching movies. Please try again.</div>}
      {movies.length > 0 && <TrendingTitle>Trending Movies 🤩</TrendingTitle>}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </div>
  );
}

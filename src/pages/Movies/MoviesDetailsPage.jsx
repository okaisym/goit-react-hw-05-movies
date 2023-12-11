import { movieDetails } from "api";
import { useState, useEffect, useRef } from "react";
import { useParams, Outlet, useLocation, NavLink } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import MovieDetails from "../../components/MovieData/MovieDetails";

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const [details, setDetails] = useState(null);
    const [isLoading, setLoader] = useState(false);
    const [isError, setError] = useState(false);
    const location = useLocation();
    const linkRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
        async function getMovie() {
            try {
                setLoader(true);
                setError(false);
                const response = await movieDetails({id: movieId});

                const responseData = {
                    imageUrl: response.poster_path
            ? `https://image.tmdb.org/t/p/w300${response.poster_path}`
            : 'https://placehold.it/300x450?text=Image_not_found',
          title: response.title,
          release_date: response.release_date.slice(0, 4),
          overview:
            response.overview !== ''
              ? response.overview
              : 'There is no overview',
          genres:
            response.genres.length > 0
              ? response.genres?.map(genre => genre.name).join(', ')
              : 'No genres found',
          vote_average: response.vote_average,
        };

        setDetails(responseData);
        return response;
                } catch (error) {
                    setError(true);
                } finally {
                    setLoader(false);
                }
            }
            getMovie();
        }, [movieId]
    );

    return (
        <div>
      {isLoading && <Loader />}
      {isError && <div>Error fetching movie details</div>}
      <NavLink to={linkRef.current}/>
      {details && <MovieDetails data={details} />}
      <Outlet />
    </div>
    )
}
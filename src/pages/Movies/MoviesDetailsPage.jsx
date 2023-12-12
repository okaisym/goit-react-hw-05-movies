import { movieDetails } from "api";
import { useState, useEffect, useRef } from "react";
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import MovieDetails from "../../components/MovieData/MovieDetails";
import { movieResponseDataNormalize } from "api";
import { GoBackNavLink } from "./MoviesPage.styled";

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

                const responseData = movieResponseDataNormalize(response);

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
      <GoBackNavLink to={linkRef.current}>⬅️ Go back</GoBackNavLink>
      {details && <MovieDetails data={details} />}
      <Outlet />
    </div>
    )
}
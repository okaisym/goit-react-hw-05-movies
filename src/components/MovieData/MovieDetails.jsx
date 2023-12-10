import { NavLink } from "react-router-dom";

export default function MovieDetails({data}) {
    const { imageUrl, title, release_date, vote_average, overview, genres } =
    data;

    return (
        <div>
            <img src={imageUrl} alt={title} height='300'/>
            <div className='movieInfo'>
                <h2>{title}<span> ({release_date})</span></h2>
                <p>User score: {vote_average}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={`cast`}>Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to={`reviews`}>Reviews</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
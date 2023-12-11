import {
  MoviesDetailsContainer,
  MovieTitle,
  Title,
  ListDetails,
  DetailsNavLink,
} from './MoviesDetails.styled';

export default function MovieDetails({ data }) {
  const { imageUrl, title, release_date, vote_average, overview, genres } =
    data;

  return (
    <MoviesDetailsContainer>
      <img src={imageUrl} alt={title} height="300" />
      <div className="movieInfo">
        <MovieTitle>
          {title}
          <span> ({release_date})</span>
        </MovieTitle>
        <p><b>User score:</b> ⭐ {vote_average}</p>
        <Title>Overview</Title>
        <p>{overview}</p>
        <Title>Genres</Title>
        <p>{genres}</p>
        <nav>
          <ListDetails>
            <li>
              <DetailsNavLink to={`cast`}>Cast 🎭 </DetailsNavLink>
            </li>
            <li>
              <DetailsNavLink to={`reviews`}>Reviews 👀</DetailsNavLink>
            </li>
          </ListDetails>
        </nav>
      </div>
    </MoviesDetailsContainer>
  );
}

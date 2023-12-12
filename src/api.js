import axios from 'axios';

const API_KEY = '7857d3be668b30082be7813451c66108';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `3/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return response;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const movieDetails = async ({ id }) => {
  const response = await axios.get(
    `3/movie/${id}?language=en-US&append_to_response=images,credits&api_key=${API_KEY}`
  );
  return response.data;
};

export const getCast = async ({ id }) => {
  const response = await axios.get(
    `3/movie/${id}/credits?language=en-US&append_to_response=images,credits&api_key=${API_KEY}`
  );
  return response.data;
};

export const getReviews = async ({ id }) => {
  const response = await axios.get(
    `3/movie/${id}/reviews?language=en-US&append_to_response=images,credits&api_key=${API_KEY}`
  );
  return response.data;
};

export const getPoster = url =>
  url
    ? `https://image.tmdb.org/t/p/w300${url}`
    : 'https://placehold.it/300x450?text=Image_not_found';

export const movieResponseDataNormalize = response => {
  const responseData = {
    imageUrl: getPoster(response.poster_path),
    title: response.title,
    release_date: response.release_date.slice(0, 4),
    overview:
      response.overview !== '' ? response.overview : 'There is no overview',
    genres:
      response.genres.length > 0
        ? response.genres?.map(genre => genre.name).join(', ')
        : 'No genres found',
    vote_average: response.vote_average,
  };

  return responseData;
};

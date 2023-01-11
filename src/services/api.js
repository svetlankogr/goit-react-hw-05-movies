import axios from 'axios';

const API_KEY = '4d1fe51ed84bccfd5906e94a2d193282';

const filmsApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovie = async () => {
  const { data } = await filmsApi.get('/trending/all/day', {
    params: {
      page: 1,
    },
  });
  return data;
};
export const getMovieByQuery = async query => {
  const { data } = await filmsApi.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await filmsApi.get(`/movie/${id}`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await filmsApi.get(`/movie/${id}/reviews`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await filmsApi.get(`/movie/${id}/credits`);
  return data;
};

export function fetchGenresList() {
  return filmsApi.get('genre/movie/list?language=en-US');
}

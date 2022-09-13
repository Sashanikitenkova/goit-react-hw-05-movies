import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '6fdda2cf7740f9f0b3187603c7864dcc';

export const fetchTrending = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchSearchMovies = async (moviesName) => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${moviesName}`);
    return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
}

export const fetchCast = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data.cast;
}

export const fetchReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
}
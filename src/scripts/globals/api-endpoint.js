import CONFIG from './config';

const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  RESTAURANT_API: {
    LIST: `${CONFIG.RESTAURANT_API.BASE_URL}list`,
    DETAIL: (id) => `${CONFIG.RESTAURANT_API.BASE_URL}detail/${id}`,
    SEARCH: (query) => `${CONFIG.RESTAURANT_API.BASE_URL}search?q=${query}`,
    REVIEW: `${CONFIG.RESTAURANT_API.BASE_URL}review`,
  },
};

export default API_ENDPOINT;

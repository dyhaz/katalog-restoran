const CONFIG = {
  KEY: 'e1a6924801ea77533f583423aed6fd12',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'HungryVegans-V1',
  RESTAURANT_API: {
    API_KEY: '12345',
    BASE_URL: 'https://restaurant-api.dicoding.dev/',
    BASE_IMAGE_URL: {
      MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
    },
  },
  DATABASE_NAME: 'restaurant-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
  MAX_CHARS: 200,
  IMG_HEIGHT: 213,
  IMG_WIDTH: 313,
};

export default CONFIG;

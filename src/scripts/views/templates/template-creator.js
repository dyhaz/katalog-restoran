import CONFIG from '../../globals/config';
import truncateStr from '../../utils/string-utils';

const createRestaurantDetailTemplate = (rest) => `
  <h2 class="movie__title">${rest.name}</h2>
  <img class="movie__poster" src="${CONFIG.RESTAURANT_API.BASE_IMAGE_URL.MEDIUM + rest.pictureId}" alt="${rest.name}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Description</h4>
    <p>${rest.description}</p>
    <h4>Release Date</h4>
    <p>${rest.release_date}</p>
    <h4>Duration</h4>
    <p>${rest.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${rest.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${rest.overview}</p>
  </div>
`;

const createRestaurantItemTemplate = (rest, i) => `
            <div class="card-item">
                <div class="content-box">
                    <img height="213" class="img${i}" src="${CONFIG.RESTAURANT_API.BASE_IMAGE_URL.MEDIUM + rest.pictureId}" alt="${rest.name}">
                    <div id="ribbon-container">
                        <a href="#" id="ribbon" target="_blank">${rest.city}</a>
                    </div>
                </div>
                <div>
                    <div class="star-wrapper">
                      <span class="fas fa-star s1 ${rest.rating >= 1 ? 'active' : ''}"></span>
                      <span class="fas fa-star s2 ${rest.rating >= 2 ? 'active' : ''}"></span>
                      <span class="fas fa-star s3 ${rest.rating >= 3 ? 'active' : ''}"></span>
                      <span class="fas fa-star s4 ${rest.rating >= 4 ? 'active' : ''}"></span>
                      <span class="fas fa-star s5" ${rest.rating === 5 ? 'active' : ''}></span>
                      (${`${rest.rating}/ 5`})
                    </div> 
                    <h4><a class="title-href" href="${`/#/detail/${rest.id}`}">${rest.name}</a></h4>
                    <p>${truncateStr(rest.description, CONFIG.MAX_CHARS)}</p>
                </div>
            </div>
`;

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
        <img class="movie-item__header__poster" alt="${movie.title}"
            src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="movie-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${movie.vote_average}</span></p>
        </div>
    </div>
    <div class="movie-item__content">
        <h3><a href="${`/#/detail/${movie.id}`}">${movie.title}</a></h3>
        <p>${movie.overview}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate,
  createMovieItemTemplate, createMovieDetailTemplate,
  createLikeButtonTemplate, createLikedButtonTemplate,
};

import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import FloatingButtonInitiator from '../../utils/floating-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  // async afterRender() {
  //   const url = UrlParser.parseActiveUrlWithoutCombiner();
  //   const movie = await TheMovieDbSource.detailMovie(url.id);
  //   const movieContainer = document.querySelector('#movie');
  //   movieContainer.innerHTML = createMovieDetailTemplate(movie);
  // },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getDetail = await RestaurantSource.detail(url.id);
    const movieContainer = document.querySelector('#restaurant');
    movieContainer.innerHTML = createRestaurantDetailTemplate(getDetail);

    FloatingButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: getDetail.id,
        name: getDetail.name,
        description: getDetail.description,
        address: getDetail.address,
        pictureId: getDetail.pictureId,
      },
    });
  },
};

export default Detail;

import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
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
    const movie = await RestaurantSource.detail(url.id);
    const movieContainer = document.querySelector('#restaurant');
    movieContainer.innerHTML = createRestaurantDetailTemplate(movie);
  },
};

export default Detail;

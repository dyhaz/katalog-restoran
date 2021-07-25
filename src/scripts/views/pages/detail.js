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

  async afterRender() {
    await this.reloadDetail((await RestaurantSource.emptyRestaurants(1))[0]);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getDetail = await RestaurantSource.detail(url.id);
    await this.reloadDetail(getDetail);

    FloatingButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: getDetail.id,
        name: getDetail.name,
        description: getDetail.description,
        city: getDetail.city,
        address: getDetail.address,
        pictureId: getDetail.pictureId,
        rating: getDetail.rating,
      },
    });
  },

  async reloadDetail(detail) {
    const restContainer = document.querySelector('#restaurant');
    restContainer.innerHTML = createRestaurantDetailTemplate(detail);
  },
};

export default Detail;

import { createRestaurantItemTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const Restaurants = {
  async render() {
    return `
        <h1 id="list_title">Explore Restaurant</h1>
        <p id="list_desc">Cool vegan restaurants to eat near me.</p>
        <div class="card">
        <!-- Card goes here -->
        </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    let restaurants = [];
    if (url.id) {
      restaurants = await RestaurantSource.search(url.id);
      document.querySelector('#list_title').innerHTML = `Search Results: ${url.id}`;
      document.querySelector('#list_desc').innerHTML = '';
    } else {
      restaurants = await RestaurantSource.restaurants();
    }

    const restaurantsContainer = document.querySelector('.card');
    restaurants.forEach((res, i) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(res, i);
    });
  },
};

export default Restaurants;

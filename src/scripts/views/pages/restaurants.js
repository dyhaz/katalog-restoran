import { createRestaurantItemTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

let restaurants = [];
const Restaurants = {
  async render() {
    return `
        <h1 id="list_title">Explore Restaurant</h1>
        <p id="list_desc">Cool vegan restaurants to eat near me.</p>
        <div class="restaurant-content">
        <!-- Card goes here -->
        </div>
    `;
  },

  async afterRender() {
    await this.loadRestaurants();
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    if (url.id) {
      restaurants = await RestaurantSource.search(url.id);
      document.querySelector('#list_title').innerHTML = `Search Results: ${url.id}`;
      document.querySelector('#list_desc').innerHTML = '';
    } else {
      restaurants = await RestaurantSource.restaurants();
    }

    await this.loadRestaurants();
  },

  async loadRestaurants() {
    const restaurantsContainer = document.querySelector('.restaurant-content');

    if (restaurants.length === 0) {
      restaurants = await RestaurantSource.emptyRestaurants(20);
    }
    restaurantsContainer.innerHTML = createRestaurantItemTemplate(restaurants);
  },
};

export default Restaurants;

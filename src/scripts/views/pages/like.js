import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Like = {
  async render() {
    return `
        <h1 id="list_title">Favorites</h1>
        <p id="list_desc">Your liked restaurants.</p>
        <div class="restaurant-content">
        <!-- Card goes here -->
        </div>
    `;
  },

  async afterRender() {
    let restaurants = [];
    restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    const restaurantsContainer = document.querySelector('.restaurant-content');

    if (restaurants.length === 0) {
      restaurantsContainer.className = '';
      restaurantsContainer.innerHTML = `
        <p></p>
        <i class="fa fa-star"></i>
        <p></p>
        <h3 id="no_favorites">No favorites yet</h3>
      `;
    }

    restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
  },
};

export default Like;

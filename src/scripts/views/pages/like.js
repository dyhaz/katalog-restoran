import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Like = {
  async render() {
    return `
        <h1 id="list_title">Favorites</h1>
        <p id="list_desc">Your liked restaurants.</p>
        <div class="card">
        <!-- Card goes here -->
        </div>
    `;
  },

  async afterRender() {
    let restaurants = [];
    restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    const restaurantsContainer = document.querySelector('.card');
    restaurants.forEach((res, i) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(res, i);
    });
  },
};

export default Like;

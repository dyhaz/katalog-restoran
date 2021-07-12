import { createRestaurantItemTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';

const Restaurants = {
  async render() {
    return `
        <h1>Explore Restaurant</h1>
        <p>Cool vegan restaurants to eat near me.</p>
        <div class="card">
        <!-- Card goes here -->
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurants();
    const restaurantsContainer = document.querySelector('.card');
    restaurants.forEach((res, i) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(res, i);
    });
  },
};

export default Restaurants;

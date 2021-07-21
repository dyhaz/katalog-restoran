import itActsAsFavoriteRestaurantsModel from './contract/favRestaurantContract';
import FavoriteRestaurantDB from '../src/scripts/data/favoriterestaurant-idb';

describe('Favorite Restaurants Idb Contract Test Implementation', () => {
  afterEach(async () => {
    const restaurants = await FavoriteRestaurantDB.getAllRestaurants();
    restaurants.forEach(async (restaurant) => {
      await FavoriteRestaurantDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantsModel(FavoriteRestaurantDB);
});

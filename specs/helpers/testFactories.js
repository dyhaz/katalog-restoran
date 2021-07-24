import LikeButtonInitiator from '../../src/scripts/utils/floating-button-initiator';
import FavoriteRestaurantDB from '../../src/scripts/data/favoriterestaurant-idb';
import '../../src/scripts/views/custom-elements/restaurants/index';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    FavoriteRestaurant: FavoriteRestaurantDB,
    restaurant,
  });
};

export default createLikeButtonPresenterWithRestaurant;

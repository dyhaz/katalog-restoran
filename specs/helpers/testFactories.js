import LikeButtonInitiator from '../../src/scripts/utils/floating-button-initiator';
import FavoriteRestaurantDB from '../../src/scripts/data/favoriterestaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    FavoriteRestaurant: FavoriteRestaurantDB,
    data: {
      restaurant,
    },
  });
};

export default createLikeButtonPresenterWithRestaurant;

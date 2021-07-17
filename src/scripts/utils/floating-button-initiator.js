import FavoriteRestaurant from '../data/favoriterestaurant-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate, createWriteReviewButtonTemplate } from '../views/templates/template-creator';

const FloatingButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isExists(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isExists(id) {
    const object = await FavoriteRestaurant.getRestaurant(id);
    return !!object;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createWriteReviewButtonTemplate()
      + createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    const reviewButton = document.querySelector('#reviewButton');

    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurant.putRestaurant(this._restaurant);
      await this._renderButton();
    });

    reviewButton.addEventListener('click', async () => {
      window.location.href = `/#/review/${this._restaurant.id}`;
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FloatingButtonInitiator;

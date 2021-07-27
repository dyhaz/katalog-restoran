import CONFIG from '../../../globals/config';
import truncateStr from '../../../utils/string-utils';

export default class RestaurantDetailElement extends HTMLElement {
  connectedCallback() {
    this.rest = JSON.parse(atob(this.getAttribute('restaurant'))) || null;

    if (this.rest) {
      this.innerHTML = `<div class="restaurant__content">
        <div class="row">
            <div class="col">
              <img class="lazyload restaurant__poster skeleton-loader" data-src="${CONFIG.RESTAURANT_API.BASE_IMAGE_URL.MEDIUM + this.rest.pictureId}" alt="${this.rest.name}" />
              <div class="cat_row">
                ${this.rest.categories.map((cat) => `
                    <a href="/#/search/${cat.name}" class="cat_item">
                        <strong>${cat.name}</strong>
                    </a>
                `).join('')}          
              </div>
              <h4>Foods</h4>
              <div class="foods_row skeleton-loader">
                ${this.rest.menus.foods.map((food) => `
                    ${food.name},
                `).join('').trim().slice(0, -1)}
              </div>
              <h4>Drinks</h4>
              <div class="drinks_row skeleton-loader">
                ${this.rest.menus.drinks.map((drink) => `
                    ${drink.name},
                `).join('').trim().slice(0, -1)}
              </div>
            </div>
            <div class="col">
              <h2 class="restaurant__title skeleton-loader">${this.rest.name}</h2>
              <div class="restaurant__info">
                <div class="star-wrapper">
                  <span class="fas fa-star s1 ${this.rest.rating >= 1 ? 'active' : ''}"></span>
                  <span class="fas fa-star s2 ${this.rest.rating >= 2 ? 'active' : ''}"></span>
                  <span class="fas fa-star s3 ${this.rest.rating >= 3 ? 'active' : ''}"></span>
                  <span class="fas fa-star s4 ${this.rest.rating >= 4 ? 'active' : ''}"></span>
                  <span class="fas fa-star s5" ${this.rest.rating === 5 ? 'active' : ''}></span>
                  (${`${this.rest.rating}/ 5`})
                </div>
                <p>${this.rest.customerReviews.length} review${this.rest.customerReviews.length > 1 ? 's' : ''}</p>
                <h4>Description</h4>
                <p class="skeleton-loader">${this.rest.description}</p>
                <h4>Address</h4>
                <p class="skeleton-loader">${this.rest.address}</p>
              </div>
            </div>
        </div>
        <div class="restaurant__overview">
          <h3>Consumer Reviews</h3>
          <div class="row skeleton-loader">
              ${this.rest.customerReviews.map((review) => `
                  <div class="col overview_item">
                      <div class="overview_profile">
                        <img class="lazyload" width="36px" height="36px" data-src="images/blank.png" alt="profile" />
                        <h4>${review.name}</h4>
                      </div>
                      <p>${truncateStr(review.review, CONFIG.MAX_CHARS)}</p>
                  </div>
              `).join('')}
          </div>
        </div>
      </div>`;
    }
  }
}
if (!window.customElements.get('app-restaurant-detail')) {
  window.customElements.define('app-restaurant-detail', RestaurantDetailElement);
}

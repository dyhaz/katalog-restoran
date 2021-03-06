import CONFIG from '../../../globals/config';
import truncateStr from '../../../utils/string-utils';

export default class RestaurantItemElement extends HTMLElement {
  connectedCallback() {
    this.rest = JSON.parse(atob(this.getAttribute('restaurants'))) || null;

    if (this.rest) {
      this.innerHTML = '';

      this.rest.forEach((rest) => {
        this.innerHTML += `<div class="card-item">
          <div class="content-box">
              <img class="lazyload skeleton-loader" height="213" class="img${rest.id}" data-src="${CONFIG.RESTAURANT_API.BASE_IMAGE_URL.MEDIUM + rest.pictureId}" alt="${rest.name}">
              <div id="ribbon-container">
                  <span id="ribbon skeleton-loader">${rest.city}</span>
              </div>
              <div class="star-wrapper">
                <span class="fas fa-star s1 ${rest.rating >= 1 ? 'active' : ''}"></span>
                <span class="fas fa-star s2 ${rest.rating >= 2 ? 'active' : ''}"></span>
                <span class="fas fa-star s3 ${rest.rating >= 3 ? 'active' : ''}"></span>
                <span class="fas fa-star s4 ${rest.rating >= 4 ? 'active' : ''}"></span>
                <span class="fas fa-star s5" ${rest.rating === 5 ? 'active' : ''}></span>
                (${`${rest.rating}/ 5`})
              </div> 
          </div>
          <div>
              <h4><a class="title-href skeleton-loader" href="${`/#/detail/${rest.id}`}">${rest.name}</a></h4>
              <p class="skeleton-loader">${truncateStr(rest.description, CONFIG.MAX_CHARS)}</p>
          </div>
        </div>
      `;
      });
    }
  }
}
if (!window.customElements.get('app-restaurant-item')) {
  window.customElements.define('app-restaurant-item', RestaurantItemElement);
}

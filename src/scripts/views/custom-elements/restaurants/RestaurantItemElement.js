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
              <img class="lazyload" height="213" class="img${rest.id}" src="${CONFIG.RESTAURANT_API.BASE_IMAGE_URL.MEDIUM + rest.pictureId}" alt="${rest.name}">
              <div id="ribbon-container">
                  <span id="ribbon">${rest.city}</span>
              </div>
          </div>
          <div>
              <div class="star-wrapper">
                <span class="fas fa-star s1 ${rest.rating >= 1 ? 'active' : ''}"></span>
                <span class="fas fa-star s2 ${rest.rating >= 2 ? 'active' : ''}"></span>
                <span class="fas fa-star s3 ${rest.rating >= 3 ? 'active' : ''}"></span>
                <span class="fas fa-star s4 ${rest.rating >= 4 ? 'active' : ''}"></span>
                <span class="fas fa-star s5" ${rest.rating === 5 ? 'active' : ''}></span>
                (${`${rest.rating}/ 5`})
              </div> 
              <h4><a class="title-href" href="${`/#/detail/${rest.id}`}">${rest.name}</a></h4>
              <p>${truncateStr(rest.description, CONFIG.MAX_CHARS)}</p>
          </div>
        </div>
      `;
      });
    }
  }
}

window.customElements.define('app-restaurant-item', RestaurantItemElement);

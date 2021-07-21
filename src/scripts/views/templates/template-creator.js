const createRestaurantDetailTemplate = (rest) => `
  <app-restaurant-detail restaurant="${btoa(JSON.stringify(rest))}"></app-restaurant-detail>
`;

const createRestaurantItemTemplate = (restaurants) => `
  <app-restaurant-item restaurants="${btoa(JSON.stringify(restaurants))}"></app-restaurant-item>
`;

const createLikeButtonTemplate = () => `
  <app-like-button></app-like-button>
`;

const createLikedButtonTemplate = () => `
  <app-like-button liked="true"></app-like-button>
`;

const createWriteReviewButtonTemplate = () => `
  <app-review-button></app-review-button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate,
  createLikeButtonTemplate, createWriteReviewButtonTemplate, createLikedButtonTemplate,
};

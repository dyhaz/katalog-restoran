const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('unliking restaurant', async ({ I }) => {
  I.see('No favorites yet', '#no_favorites');

  I.amOnPage('/');

  I.seeElement('.card-item');

  const restaurant = locate('.title-href').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);

  I.click(restaurant);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.seeElement('.title-href');

  const likedRestaurantTitle = await I.grabTextFrom('.title-href');

  assert.strictEqual(restaurantTitle, likedRestaurantTitle);

  I.amOnPage('/');

  I.seeElement('.card-item');

  I.click(locate('.title-href').first());

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.see('No favorites yet', '#no_favorites');
});

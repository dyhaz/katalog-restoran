const assert = require('assert');

Feature('Write Restaurant Review');

Before(({ I }) => {
  I.amOnPage('/#/');
});

Scenario('writing valid review', async ({ I }) => {
  I.seeElement('.card-item');

  const restaurant = locate('.title-href').first();

  I.click(restaurant);

  I.seeElement('#reviewButton');

  I.click('#reviewButton');

  I.wait(1);

  I.seeElement('#txt_name');

  I.click('#txt_name');

  const randomName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  I.type(randomName, 100);

  I.click('#txt_review');

  I.type('sangat menarique', 100);

  I.click('#btn_submit');

  I.seeElement('.overview_profile');

  const profile = locate('.overview_profile').withText(randomName);

  assert.strictEqual(randomName, await I.grabTextFrom(profile));
});

Scenario('writing empty review', async ({ I }) => {
  I.seeElement('.card-item');

  const restaurant = locate('.title-href').first();

  I.click(restaurant);

  I.seeElement('#reviewButton');

  I.click('#reviewButton');

  I.wait(1);

  I.seeElement('#txt_name');

  I.click('#txt_name');

  I.type('noname', 100);

  I.click('#btn_submit');

  I.amOnPage('/#/');

  I.click(locate('.title-href').first());

  I.seeElement('.overview_profile');

  I.dontSeeElement(locate('.overview_profile').withText('noname'));
});

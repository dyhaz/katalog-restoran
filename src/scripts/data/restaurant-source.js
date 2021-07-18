import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async restaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_API.LIST).catch((err) => {
      alert(err);
    });
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async search(query) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_API.SEARCH(query)).catch((err) => {
      alert(err);
    });
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_API.DETAIL(id)).catch((err) => {
      alert(err);
    });
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async review(id, name, review) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_API.REVIEW, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.RESTAURANT_API.API_KEY,
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ id, name, review }), // body data type must match "Content-Type" header
    }).catch(() => {
      alert('Cannot add review, please try again later!');
    });

    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}
export default RestaurantSource;

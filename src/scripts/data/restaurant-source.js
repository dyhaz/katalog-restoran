import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_API.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async search(query) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_API.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_API.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}
export default RestaurantSource;

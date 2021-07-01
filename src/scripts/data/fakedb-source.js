class FakeDbSource {
  static async restaurants() {
    const response = await fetch('DATA.json');
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}
export default FakeDbSource;

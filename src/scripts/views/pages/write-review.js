import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';

const WriteReview = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Write a Review</h2>
        <div id="form" class="form">
            <div class="form__row">
                <div class="col">
                    <label for="name">
                        Restaurant
                    </label>
                </div>
                <div class="col">
                     <input disabled type="text" id="txt_restaurant" name="restaurant" />
                </div>
            </div>
            <p></p>
            <div class="form__row">
                <div class="col">
                    <label for="name">
                        Your Name
                    </label>
                </div>
                <div class="col">
                     <input type="text" id="txt_name" name="name" />
                </div>
            </div>
            <p></p>
            <div class="form__row">
                <div class="col">
                    <label for="review">
                        Review
                    </label>
                </div>
                <div class="col">
                     <textarea rows="5" id="txt_review" name="review"></textarea>
                </div>
            </div>
            <p></p>
            <div class="form__row">
                <div class="col">
                </div>
                <div class="col">
                    <button id="btn_submit">Submit</button>
                </div>
            </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getDetail = await RestaurantSource.detail(url.id);
    const txtRestaurant = document.querySelector('#txt_restaurant');
    txtRestaurant.value = getDetail.name;
    const btnSubmit = document.querySelector('#btn_submit');
    btnSubmit.addEventListener('click', async () => {
      // Show spinner
      JsLoadingOverlay.show({ spinnerIcon: 'ball-circus' });

      await RestaurantSource.review(url.id, document.querySelector('#txt_name').value,
        document.querySelector('#txt_review').value);

      // Hide spinner
      JsLoadingOverlay.hide();
      alert('Review added!');
      window.location.replace(`/#/detail/${url.id}`);
    });
  },
};

export default WriteReview;

export default class WriteReviewButtonElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button aria-label="write a review" id="reviewButton" title="write a review" class="review">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>`;
  }
}

window.customElements.define('app-review-button', WriteReviewButtonElement);

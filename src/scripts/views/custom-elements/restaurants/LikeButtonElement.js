export default class LikeButtonElement extends HTMLElement {
  connectedCallback() {
    this.liked = this.getAttribute('liked') || false;

    this.innerHTML = `<button aria-label="${!this.liked ? 'like this restaurant' : 'unlike this restaurant'}" id="likeButton" class="like">
            <i class="fa fa-heart${!this.liked ? '-o' : ''}" aria-hidden="true"></i>
        </button>`;
  }
}
if (!window.customElements.get('app-like-button')) {
  window.customElements.define('app-like-button', LikeButtonElement);
}

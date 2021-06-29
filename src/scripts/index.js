import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/colors.css';
import App from './views/app';

const xmlhttp = new XMLHttpRequest();
const url = 'DATA.json';

const maxChars = 200;
const imgHeight = 213; // 213
const imgWidth = 313; // 313

xmlhttp.onreadystatechange = () => {
  if (this.readyState === 4 && this.status === 200) {
    const res = JSON.parse(this.responseText);
    processData(res);
  }
};
xmlhttp.open('GET', url, true);
xmlhttp.send();

function processData(res) {
  const arr = res.restaurants;
  const resizeImg = (src, id) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Start resizing

      // create an off-screen canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, imgWidth, imgHeight);

      // encode image to data-uri with base64 version of compressed image
      document.getElementsByClassName(`img${id}`)[0].src = canvas.toDataURL();
    };

    img.src = src;
  };

  const truncateStr = (str, n) => ((str.length > n) ? `${str.substr(0, n - 1)}&hellip;` : str);

  arr.length.forEach((val, i) => {
    const element = `
            <div class="card-item">
                <div class="content-box">
                    <img height="213" class="img${i}" src="${arr[i].pictureId}" alt="${arr[i].name}">
                    <div id="ribbon-container">
                        <a href="#" id="ribbon" target="_blank">${arr[i].city}</a>
                    </div>
                </div>
                <div>
                    <div class="star-wrapper">
                      <span class="fas fa-star s1 ${arr[i].rating >= 1 ? 'active' : ''}"></span>
                      <span class="fas fa-star s2 ${arr[i].rating >= 2 ? 'active' : ''}"></span>
                      <span class="fas fa-star s3 ${arr[i].rating >= 3 ? 'active' : ''}"></span>
                      <span class="fas fa-star s4 ${arr[i].rating >= 4 ? 'active' : ''}"></span>
                      <span class="fas fa-star s5" ${arr[i].rating === 5 ? 'active' : ''}></span>
                      (${`${arr[i].rating}/ 5`})
                    </div> 
                    <h4>${arr[i].name}</h4>
                    <p>${truncateStr(arr[i].description, maxChars)}</p>
                </div>
            </div>
        `;
    document.getElementsByClassName('card')[0].insertAdjacentHTML('beforeend', element);
    resizeImg(arr[i].pictureId, i);
  });
}

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

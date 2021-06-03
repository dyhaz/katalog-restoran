import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/colors.css';
import './ui.js';

console.log('Hello Coders! :)');

let xmlhttp = new XMLHttpRequest();
let url = "DATA.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let res = JSON.parse(this.responseText);
        processData(res);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function processData(res) {
    let arr = res.restaurants;
    let resizeImg = (src, id) => {
        let img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = function() {
            // Start resizing

            // create an off-screen canvas
            let canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, 313, 213);

            // encode image to data-uri with base64 version of compressed image
            document.getElementsByClassName("img" + id)[0].src = canvas.toDataURL();
        };

        img.src = src;
    }

    let truncateStr = (str, n) => {
        return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
    }

    for (let i = 0 ; i < arr.length ; i ++) {
        let element = `
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
                      (${arr[i].rating + '/ 5'})
                    </div> 
                    <h4>${arr[i].name}</h4>
                    <p>${truncateStr(arr[i].description, 411)}</p>
                </div>
            </div>
        `
        document.getElementsByClassName("card")[0].insertAdjacentHTML('beforeend', element);
        resizeImg(arr[i].pictureId, i);
    }
}



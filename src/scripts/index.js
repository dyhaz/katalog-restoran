import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

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
    for (let i = 0 ; i < arr.length ; i ++) {
        let element = `
            <div class="card-item">
                <img width="320" height="213" src="${arr[i].pictureId}" alt="${arr[i].name}">
                <div>
                    <p class="rating">Rating: ${arr[i].rating}</p>
                    <h4>${arr[i].name}</h4>
                    <p>${arr[i].description}</p>
                </div>
            </div>
        `
        document.getElementsByClassName("card")[0].insertAdjacentHTML('beforeend', element);
    }
}

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");


hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});

document.addEventListener("click", (evt) => {
    const navElement = document.getElementById("drawer");
    let targetElement = evt.target; // clicked element

    if (drawerElement.classList.contains("open")) {
        do {
            if (targetElement == navElement) {
                // This is a click inside. Do nothing, just return.
                return;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
        } while (targetElement);

        // This is a click outside.
        drawerElement.classList.toggle("open");
    }
});

// Handle menu click
let listItems = document.querySelectorAll("ul li"); // this returns an array of each li
listItems.forEach(function(item) {
    item.onclick = function() {
        let url = this.childNodes[0].href;
        if (url) {
            window.location.href = url;
        }
    }
});

document.body.onkeyup = function(e){
    if(e.keyCode === 32 && e.target === document.body){
        e.preventDefault();
        drawerElement.classList.toggle("open");
    }
}

// setInterval(() => {
//     if (drawerElement.classList.contains("open")) {
//         setTimeout(() => {
//             drawerElement.classList.toggle("open");
//         }, 2000);
//     }
// }, 3000);

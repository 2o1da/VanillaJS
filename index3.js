const first = document.getElementById("title");
const second = document.querySelector("#title");

first.innerHTML = "Hello! From JS";
first.style.color = "yellow";
document.title = 'Beautiful';

console.dir(document);


// event 객체
function handleResize(event) {
    console.log(event);
    console.log("I've been resized");
}

// handleResize() : 호출 안해도 자동으로 호출 됨
// handleResize : 바로 호출하지 않고 
window.addEventListener("resize", handleResize);


const BASE_COLOR = "rgb(255, 255, 255)";
const OTHER_COLOR = "#000000";

function handleClick() {
    const currentColor = first.style.color;
    if (currentColor === BASE_COLOR) {
        first.style.color = OTHER_COLOR;
    } else {
        first.style.color = BASE_COLOR;
    }
}

function init() {
    first.style.color = BASE_COLOR;
    first.addEventListener("click", handleClick)
}

init();

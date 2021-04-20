const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");

    delBtn.innerText = "❌";
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    //event.preventDefault(); // event 금지 방지

    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // input 다시 공백으로 만듦
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS); // ?

    if (toDos !== null) {
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();

let myLibrary = [];
const newBookBtn = document.querySelector(".new-book-btn");
const addBookBtn = document.querySelector(".add-book-btn");
const popUp = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".close-btn");


newBookBtn.addEventListener("click", () => popUp.setAttribute("style", "visibility:visible;"));

closeBtn.addEventListener("click", () => popUp.setAttribute("style", "visibility:hidden;"));


function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
}
let myLibrary = [];
let bookIndex = "";
const newBookBtn = document.querySelector(".new-book-btn");
const addBookBtn = document.querySelector(".add-book-btn");
const popUp = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".close-btn");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const warning = document.querySelector(".empty-fields");
const gridContainer = document.querySelector(".grid-container");


newBookBtn.addEventListener("click", () => popUp.style.visibility = "visible");
closeBtn.addEventListener("click", () => {
    popUp.style.visibility = "hidden";
    warning.style.display = "none";
});

addBookBtn.addEventListener("click", addBookDetails);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
    this.read = read;
}



function addBookDetails() {

    if (bookTitle.value == "" || bookAuthor.value == "" || bookPages.value == "") {
        validateForm();
    } else {
        const currentBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
        warning.style.display = "none";
        popUp.style.visibility = "hidden";
        bookTitle.value = "";
        bookAuthor.value = "";
        bookPages.value = "";
        bookRead.checked = false;
        addBookToLibrary(currentBook);
    }
}


function addBookToLibrary(currentBook) {

    myLibrary.push(currentBook);

    const bookDetails = createGridItems(myLibrary);

    for (book in myLibrary) {

        bookDetails.readBtn.setAttribute("data-index", `${book}`);
        bookDetails.deleteBtn.setAttribute("data-index", `${book}`);

        console.log(bookDetails.readBtn.dataset.index);
        bookDetails.titlePara.innerText = `${myLibrary[book].title}`;
        bookDetails.authorPara.innerText = `${myLibrary[book].author}`;
        bookDetails.pagesPara.innerText = `${myLibrary[book].pages}`;

        if (myLibrary[book].read === true) {
            bookDetails.readBtn.style.backgroundColor = "rgb(60, 148, 60)"
        } else {
            bookDetails.readBtn.style.backgroundColor = "rgb(227, 67, 67)"
        }

    }
    console.log(myLibrary);

    bookDetails.readBtn.addEventListener("click", () => toggleRead(bookDetails));
    bookDetails.deleteBtn.addEventListener("click", () => deleteBook(bookDetails));

}


function createGridItems() {

    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-items");
    // gridItem.setAttribute("data-index", `${}`)
    gridContainer.appendChild(gridItem);


    const titlePara = document.createElement("p");
    gridItem.appendChild(titlePara);


    const authorPara = document.createElement("p");
    gridItem.appendChild(authorPara);


    const pagesPara = document.createElement("p");
    gridItem.appendChild(pagesPara);


    const readBtn = document.createElement("button");
    readBtn.classList.add("read-btn");
    readBtn.innerText = "READ";
    gridItem.appendChild(readBtn);


    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "DELETE";
    gridItem.appendChild(deleteBtn);

    return {
        titlePara,
        authorPara,
        pagesPara,
        gridItem,
        readBtn,
        deleteBtn
    };
}


function validateForm() {
    if (bookTitle.value == "" && bookAuthor.value == "" && bookPages.value == "") {
        warning.style.display = "block";
        bookTitle.style.border = "1px solid red";
        bookAuthor.style.border = "1px solid red";
        bookPages.style.border = "1px solid red";
    } else if (bookTitle.value == "") {
        warning.style.display = "block";
        bookTitle.style.border = "1px solid red";
        bookAuthor.style.border = "1px solid";
        bookPages.style.border = "1px solid";
    } else if (bookAuthor.value == "") {
        warning.style.display = "block";
        bookTitle.style.border = "1px solid";
        bookAuthor.style.border = "1px solid red";
        bookPages.style.border = "1px solid";
    } else if (bookPages.value == "") {
        warning.style.display = "block";
        bookTitle.style.border = "1px solid";
        bookAuthor.style.border = "1px solid";
        bookPages.style.border = "1px solid red";
    }
}

function toggleRead(bookDetails) {

    const indexRead = bookDetails.readBtn.dataset.index;

    if (myLibrary[indexRead].read === true) {
        myLibrary[indexRead].read = false;
        bookDetails.readBtn.style.backgroundColor = "rgb(227, 67, 67)";
    } else {
        myLibrary[indexRead].read = true;
        bookDetails.readBtn.style.backgroundColor = "rgb(60, 148, 60)";
    }
}

function deleteBook(bookDetails) {


    myLibrary.splice(bookDetails.deleteBtn.dataset.index, 1);
    bookDetails.gridItem.remove();
    console.log(myLibrary);

    // console.log(bookDetails.deleteBtn.dataset.index);

    // for (book in myLibrary)

    //     if (bookDetails.deleteBtn.dataset.index == book) {
    //         myLibrary.splice(bookDetails.deleteBtn.dataset.index, 1);
    //         bookDetails.gridItem.remove();
    //         console.log(myLibrary);

    // }
}
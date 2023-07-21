let myLibrary = [];

function Book(name, author, pages) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(new_book) {
  //Add book to created array
  myLibrary.push(new_book);

  //Add Article div to books main
  const article_div_add = CreateBookNode(new_book);
  const book_container = document.querySelector(".books-main");
  book_container.appendChild(article_div_add);
}

function CreateBookNode(book) {

    let article = document.createElement("div");
    
    let article_div = document.createElement("div");
    
    //Title of Book
    const book_title = document.createElement("h1");
    const text_node = document.createTextNode(book.name);
    book_title.appendChild(text_node);
    
    //Author w/ Pages
    const author = document.createElement("p");
    const author_text = document.createTextNode(book.author);
    const pages = document.createTextNode(`, ${book.pages} pages`);
    author.appendChild(author_text);
    author.appendChild(pages);

    //Add Toggle
    const toggle_original = document.querySelector(".toggle-div");
    const toggle_new = toggle_original.cloneNode(true);
    const new_toggle = toggle_new.querySelector(".toggle");
    new_toggle.addEventListener("click", Toggle);
    
    //Append to book_div
    article_div.appendChild(book_title);
    article_div.appendChild(author);
    article.appendChild(article_div);
    article.appendChild(toggle_new);
    article.classList.add("article")
    return article;
}

//If wanting to load books at the beginning//

function displayBook() {
    //Obtain grid container
    const book_container = document.querySelector(".books-main");
    removeAllChildNodes(book_container);

    //Loop through books and create div for each book
    for (books in myLibrary) {
        const book_div = CreateBookNode(books);
        book_container.appendChild(book_div);
    }
    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Add event listener to button
const button = document.querySelector(".add-book");
button.addEventListener("click", () => {
    const main_container = document.querySelector(".main-container");
    main_container.classList.add("active");
})

//Add event listener to overlay and submit to close form
const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
    const main_container = document.querySelector(".main-container");
    main_container.classList.remove("active");
})

const submitform = document.querySelector("form");
submitform.addEventListener("submit", (event) => {
    event.preventDefault();
    const book_name = event.currentTarget.name.value;
    const book_author = (event.currentTarget.author.value);
    const book_pages = (event.currentTarget.pages.value);
    const new_book = new Book(book_name,book_author,book_pages);
    addBookToLibrary(new_book);
    const main_container = document.querySelector(".main-container");
    main_container.classList.remove("active");
})

//Toggle button
function AddReadListener() {
    document.querySelectorAll(".toggle").forEach((btn) => {
        btn.addEventListener("click", Toggle);
    });
}

function Toggle(event) {
        const toggle = event.target;
        toggle.setAttribute("listener", "true");
        if (toggle.classList.contains("fa-toggle-off")) {
            toggle.classList.remove("fa-toggle-off");
            toggle.classList.add("fa-toggle-on");
            toggle.style.color = "green";
        } else {
            toggle.classList.remove("fa-toggle-on");
            toggle.classList.add("fa-toggle-off");
            toggle.style.color = "black";
        }
}

AddReadListener();


//Remove

document.querySelectorAll(".remove").forEach((item) => {
    item.addEventListener("click", (event) => {
        console.log(event.target);
        const article = item.parentElement;
        console.log(article);
        while (article.firstChild) {
            article.removeChild(article.firstChild);
        }
        const book_container = document.querySelector(".books-main");
        book_container.removeChild(article);
    })
});



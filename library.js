let myLibrary = [];

function Book(name, author, pages) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  let name = prompt("What is the name of the book");
  let author = prompt("What is the authors name");
  let pages = prompt("How many pages are there in the book");
  const new_book = new Book(name, author, pages);
  
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
    
    //Author
    const author = document.createElement("p");
    const author_text = document.createTextNode(book.author);
    const pages = document.createTextNode(`, ${book.pages} pages`);
    author.appendChild(author_text);
    author.appendChild(pages);
    
    //Append to book_div
    article_div.appendChild(book_title);
    article_div.appendChild(author);
    article.appendChild(article_div);
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
const button = document.querySelector("button");
button.addEventListener("click", addBookToLibrary);
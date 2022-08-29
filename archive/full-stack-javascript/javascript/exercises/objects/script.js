// Variable declaration
let myLibrary = [];

function Book(title, author, pages, readOrNot){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readOrNot}`;
    }
}

// Add a new book to the library
function addBookToLibrary() {
    title = prompt("What is the title of the book?");
    author = prompt("Who is the author of the book?");
    pages = prompt("How many pages does the book have?");
    readOrNot = prompt("Have you read the book? (yes/no)");
    myLibriary.push(new Book(title, author, pages, readOrNot));
}



let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 300, "not yet read");



// console.log(book1.info());
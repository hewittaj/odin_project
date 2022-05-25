function Book(title, author, pages, readOrNot){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readOrNot}`;
    }
}

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 300, "not yet read");
console.log(book1.info());
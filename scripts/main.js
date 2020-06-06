let myLibrary = [];

function Book(title, author, pages, bookRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookRead = bookRead;
  this.info = () => {
    return (bookRead) ? `${title} by ${author}, ${pages} pages, book was read.` :
    `${title} by ${author}, ${pages} pages, not read yet.`;
  }
}

function addBookToLibrary (title, author, pages, bookRead) {
  let newBook = new Book(title, author, pages, bookRead);
  myLibrary.push(newBook);
}

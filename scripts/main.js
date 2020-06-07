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

addBookToLibrary('Moby Dick', 'Herman Melville', '5000', true);
addBookToLibrary('The Proximity Principle', 'Ken Coleman', '215', false);
addBookToLibrary('The Fellowship of the Ring', 'J. R. R. Tolkien', '423', true);

function render() {
  // Loop through the myLibrary array
  myLibrary.forEach(book => {
    // Create DOM card element as container
    let card = document.createElement('div');
    card.classList.add('bookCard');
    
    // Insert title of book into container
    let title = document.createElement('h1'); // Create heading element
    title.textContent = book.title; // make the text content equal to book title
    card.appendChild(title); // Append title to card

    // Insert author of book into container
    let author = document.createElement('p') // Create paragraph element for author
    author.textContent = book.author.toUpperCase(); // set text content to the author name in all caps (for styling)
    author.classList.add('author');
    card.appendChild(author); // Append author to card

    // Insert page number into container
    let pages = document.createElement('p');
    pages.textContent = `${book.pages} PAGES`// set text content to number of pages
    pages.classList.add('pages');
    card.appendChild(pages); // Append pages to card

    // Insert read status into container
    let bookRead = document.createElement('p') // Create paragraph element for book status
    bookRead.textContent = (book.bookRead) ? 'READ' : 'NOT READ';// set the text content to book status
    bookRead.classList.add('bookStatus');
    (book.bookRead) ? bookRead.classList.add('read') : bookRead.classList.add('notRead'); // Add styles dependent on read status
    card.appendChild(bookRead);

    // Add card to card container
    let cardContainer = document.getElementById('cardContainer'); // Create reference to card container
    cardContainer.appendChild(card); // append the card to the container
  })
}

render();
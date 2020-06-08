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

const addBook = document.getElementById('addBook'); // Add variable for ADD BOOK button
addBook.addEventListener('click', () => {// Add event listener for the ADD BOOK button
  renderForm();
});

// Write function to render form to add new book
function renderForm () {
  // Create card for form
  let formCard = document.createElement('div');
  formCard.classList.add('formContainer'); // Add styles to form card

  let form = document.createElement('FORM'); // Create form DOM element
  let formHeading = document.createElement('h2'); // Create heading for form
  formHeading.textContent = 'ADD BOOK'; // Add text to form heading
  
  let titleLabel = document.createElement('LABEL'); // Create label DOM element for title
  titleLabel.textContent = 'TITLE'; // Add text to title label
  titleLabel.setAttribute('for', 'titleInput');
  let titleInput = document.createElement('INPUT'); // Create title input element
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('placeholder', 'Book Title');
  titleInput.setAttribute('id', 'titleInput');

  let authorLabel = document.createElement('LABEL'); // Create label DOM element for author
  authorLabel.textContent = 'AUTHOR'; // Add text to title label
  authorLabel.setAttribute('for', 'authorInput');
  let authorInput = document.createElement('INPUT'); // Create title input element
  authorInput.setAttribute('type', 'text');
  authorInput.setAttribute('placeholder', 'Author');
  authorInput.setAttribute('id', 'authorInput');

  let pagesLabel = document.createElement('LABEL'); // Create label DOM element for pages
  pagesLabel.textContent = 'PAGE COUNT'; // Add text to title label
  pagesLabel.setAttribute('for', 'pagesInput');
  let pagesInput = document.createElement('INPUT'); // Create title input element
  pagesInput.setAttribute('type', 'text');
  pagesInput.setAttribute('placeholder', 'Number of Pages');
  pagesInput.setAttribute('id', 'pagesInput');

  let submit = document.createElement('button'); // Create button DOM element for submit
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'fsubmit');
  submit.textContent = 'ADD';

  form.appendChild(formHeading);// Append formHeading to form
  form.appendChild(titleLabel); // Append title label to form
  form.appendChild(titleInput); // Append title input to form
  form.appendChild(authorLabel); // Append author label to form
  form.appendChild(authorInput); // Append author input to form
  form.appendChild(pagesLabel); // Append pages label to form
  form.appendChild(pagesInput); // Append pages input to form
  form.appendChild(submit); // Append submit button to form

  formCard.appendChild(form); // Append form to formCard
  document.body.appendChild(formCard) // Append to body
}
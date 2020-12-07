//==============================================
// Name:           Hunkar Lule
// Student Number: 153780192
// Email:          hlule@myseneca.ca
// Section:        NCC
// Assign./Test:   Assignment-5
// Date:		       2020-12-03
//==============================================

/* global  $clamp */
/* eslint-disable no-unused-vars */

const ui = {
  createBook: function(book) {
    let bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    // book image
    let bookImageDiv = document.createElement('div');
    let bookImage = document.createElement('img');
    bookImage.className = 'book-image';
    bookImage.src = book.image;
    bookImage.alt = book.title;
    bookImage.onerror = function() {
      bookImage.src = './images/books/book_cover_not_available.jpg';
      bookImage.alt = 'No book image';
    };

    bookImageDiv.appendChild(bookImage);

    // book title and author
    let bookTitleAndAuthorDiv = document.createElement('div');
    bookTitleAndAuthorDiv.className = 'book-title-and-author';

    let bookTitle = document.createElement('h4');
    bookTitle.className = 'book-title';
    bookTitle.innerText = book.title;
    $clamp(bookTitle, { clamp: 2 });

    // bookTitle.style.textOverflow = 'ellipsis';
    // bookTitle.style.whiteSpace = 'nowrap';
    // bookTitle.style.overflow = 'hidden';
    // bookTitle.style.maxWidth = '150px';

    let bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author';
    bookAuthor.innerText = 'by ';
    bookAuthor.innerText = book.author;
    bookTitleAndAuthorDiv.appendChild(bookTitle);
    bookTitleAndAuthorDiv.appendChild(bookAuthor);

    // book price
    let bookPriceDiv = document.createElement('div');
    bookPriceDiv.className = 'book-price';

    let bookPriceText = document.createElement('p');
    bookPriceText.className = 'book-price-text';
    bookPriceText.innerText = `$${(book.price / 100).toFixed(2)}`;
    bookPriceDiv.appendChild(bookPriceText);

    // add to chart button
    let bookAddToCartButtonDiv = document.createElement('div');
    bookAddToCartButtonDiv.className = 'book-add-to-cart-button';
    let addToCartButton = document.createElement('button');
    addToCartButton.type = 'button';
    addToCartButton.className = 'add-to-cart-button';
    addToCartButton.innerText = 'add to cart';
    bookAddToCartButtonDiv.appendChild(addToCartButton);

    // adding child divs to form the book
    bookDiv.appendChild(bookImageDiv);
    bookDiv.appendChild(bookTitleAndAuthorDiv);
    bookDiv.appendChild(bookPriceDiv);
    bookDiv.appendChild(bookAddToCartButtonDiv);

    return bookDiv;
  },

  addBooksToScreen: function(books) {
    let bookListElem = document.querySelector('.book-list');
    books.forEach(book => {
      let bookCard = this.createBook(book);
      bookListElem.appendChild(bookCard);
    });
  }
};

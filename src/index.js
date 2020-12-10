//==============================================
// Name:           Hunkar Lule
// Student Number: 153780192
// Email:          hlule@myseneca.ca
// Section:        NCC
// Assign./Test:   Assignment-5
// Date:		       2020-12-03
//==============================================

/* global ui */
window.onload = function() {
  ui.addBooksToScreen(window.booksData);
  let cartItems = document.querySelector('.cart-items');
  cartItems.innerHTML = JSON.parse(localStorage.getItem('cart-items'));
  document.querySelector('#btn-all').className += ' selected';

  // filtering by category in big screen
  let menuItems = Array.from(
    document.querySelectorAll('.book-menu-list .book-menu-list-item button span')
  );
  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // eslint-disable-next-line no-undef
      selectedFilter(item);
    });
  });

  // filtering by category in small screen
  let dropdownMenuItems = Array.from(document.querySelectorAll('.dropdown-content a'));
  // console.log(dorpdownMenuItems);
  dropdownMenuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      selectedFilter(item);
    });
  });

  // function to filtering books by category.

  let selectedFilter = function filterByCategory(event) {
    let filteredBooks;
    let selectedCategory = event.className;
    if (selectedCategory.toLowerCase() === 'all') {
      filteredBooks = window.booksData;
    } else if (selectedCategory.toLowerCase() === 'bestseller') {
      filteredBooks = window.booksData.filter(book => book.bestseller === true);
    } else {
      filteredBooks = window.booksData.filter(book =>
        book.genre.includes(selectedCategory.toLowerCase())
      );
    }
    let bookListElem = document.querySelector('.book-list');
    bookListElem.innerHTML = '';
    ui.addBooksToScreen(filteredBooks);
    let dropdown = document.querySelector('.dropbtn');
    dropdown.innerHTML = event.innerHTML;
    document.querySelector('.quick-search-input-box-2').value = '';
    document.querySelector('.quick-search-input-box').value = '';
  };

  // to add item to cart when 'add to cart' clicked
  document.addEventListener('click', function(e) {
    if (e.target.className === 'add-to-cart-button') {
      let cartItems = document.querySelector('.cart-items');
      let cartItemsQuantity = Number(cartItems.innerText);
      cartItemsQuantity += 1;
      cartItems.innerHTML = '';
      cartItems.innerHTML = cartItemsQuantity;
      localStorage.setItem('cart-items', JSON.stringify(cartItems.innerHTML));
    }
  });

  // quick search in big screen
  let itemSearchButton = document.querySelector('.quick-search-button');
  // console.log(itemSearchButton);
  itemSearchButton.addEventListener('click', function() {
    let userInput = document.querySelector('.quick-search-input-box').value;
    filterBooks(userInput);
  });

  // quick search in small screen
  let itemSearchButton2 = document.querySelector('.quick-search-button-2');
  // console.log(itemSearchButton2);
  itemSearchButton2.addEventListener('click', function() {
    let userInput = document.querySelector('.quick-search-input-box-2').value;
    filterBooks(userInput);
  });

  // function to filter books in the bookData array for a given search string
  function filterBooks(searchString) {
    let filteredBooks = window.booksData.filter(
      book =>
        book.author.toLowerCase().includes(searchString) ||
        book.title.toLowerCase().includes(searchString)
    );
    let bookListElem = document.querySelector('.book-list');
    bookListElem.innerHTML = '';
    ui.addBooksToScreen(filteredBooks);
  }

  // to highlight selected category
  let menuItems2 = Array.from(document.querySelectorAll('.category-button'));
  menuItems2.forEach(function(item) {
    item.addEventListener('click', function() {
      menuItems2.forEach(function(el) {
        // console.log(el.classList);
        el.classList.remove('selected');
      });
      item.className += ' selected';
    });
  });
};

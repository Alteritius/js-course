class Book {
  #title;
  #author;
  #publishYear;
  constructor(title, author = 'brak', publishYear = 'brak') {
    this.#title = title;
    this.#author = author;
    this.#publishYear = publishYear;
  }

  showDetails() {
    return `Tytuł: ${this.#title}, Autor: ${this.#author}, Data wydania: ${
      this.#publishYear
    }`;
  }
}

class Library {
  #bookCollection;
  constructor() {
    this.#bookCollection = new Map(); //klucz (tytuł), wartość (cała książka)
    this.init();
  }

  init() {
    document
      .getElementById('addBook')
      .addEventListener('click', () => this.#addBook());

    document
      .getElementById('searchBook')
      .addEventListener('click', () => this.#searchBook());
  }

  #addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publishYear = document.getElementById('date').value;

    const book = new Book(title, author, publishYear);
    this.#bookCollection.set(title, book);

    alert('Książka została dodana do zbioru');
    console.log(this.#bookCollection);
  }

  #searchBook() {
    const title = document.getElementById('searchTitle').value;
    const book = this.#bookCollection.get(title);
    const resultElement = document.getElementById('searchResult');
    if (book) {
      //   alert('mamy taką książkę');
      resultElement.textContent = book.showDetails();
    } else {
      resultElement.textContent = 'nie mamy takiej książki w zbiorze';
    }
  }
}

const library = new Library();
// const book = new Book('coconut', 'Cocolia', '2020');
// console.log(book);
// console.log(book.showDetails());

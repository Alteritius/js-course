// W ECMAScript 2022 zostały (wreszcie!) wprowadzone, prawdziwe a nie tylko oparte na konwencji, właściwości (inaczej pola) prywatne oraz metody prywatne. Opierają się one o dodanie do nazw takich metod i właściwości # (hasha) jako pierwszego znaku nazwy.

class Person {
  #firstName; // prywatna właściwość (pole)
  #lastName; // prywatna właściwość

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  // Prywatna metoda
  #fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  // Publiczna metoda korzystająca z prywatnej metody
  introduceYourself() {
    return `Cześć, jestem ${this.#fullName()}`;
  }
}

const person = new Person("John", "Nowak");
console.log(person.introduceYourself()); // "Cześć, jestem John Nowak" - korzystamy z metody publicznej, która korzysta z metody prywatnej (ale to nie my z niej korzystamy, tylko metoda z wnętrza obiektu)

// Próba dostępu do prywatnych właściwości i metod z zewnątrz klasy zakończy się błędem
// console.log(person.#firstName); // SyntaxError
// console.log(person.#lastName); // SyntaxError
// console.log(person.#fullName()); // SyntaxError

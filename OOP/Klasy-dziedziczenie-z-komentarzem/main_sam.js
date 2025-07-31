class Animal {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  breathe() {
    console.log("Zwierze oddycha");
  }
}

const zwierze = new Animal(2, "lemur");

// zwierze.__proto__ == Animal.prototype; //true

class Mammal extends Animal {
  constructor(age, name, hairs) {
    super(age, name); // wywołujemy konstruktor klasy nadrzędnej
    this.hairs = hairs;
  }
  drinkMilk() {
    console.log("Ssaki piją mleko");
  }
}

const ssak = new Mammal(3, "maks", "blond");
ssak.breathe();
ssak.drinkMilk();

class Human extends Mammal {
  constructor(age, name, hairs, language) {
    super(age, name, hairs);
    this.language = language;
  }
  speak() {
    console.log("Czlowiek mówi");
  }
}

const human = new Human(25, "stary", "ciemne", "chiński");

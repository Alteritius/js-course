// Prototyp

const Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.children = [];
  //   this.addChildren = function (name) {
  //     this.children.push(name);
  //   };
};

// jak funckja jest w prototypie to nie ma jej w środku konstruktora obiektu
Person.prototype.addChildren = function (name) {
  this.children.push(name);
};
Person.prototype.gender = "female";

const arek = new Person("arek", 20);
const monika = new Person("monika", 30);

arek.addChildren("asia");
monika.addChildren("basia");

// czesc 2

function Player() {}

class User {}

Player.prototype.age = 25;
const janek = new Player();
const marta = new User();

janek.constructor;

const darek = new janek.constructor();

function Citizen(country, citizenship) {
  this.country = country;
  this.citizenship = citizenship;
  this.changeCitizenship = function (citizenship) {
    this.citizenship = citizenship;
    console.log(`zmiana za pomocą metody w instancji na ${this.citizenship}`);
  };
}

Citizen.prototype.changeCitizenship = function (citizenship) {
  this.citizenship = citizenship;
  console.log(`zmiana za pomocą metody w prototypie na ${this.citizenship}`);
};

const zenek = new Citizen("Polska", "polskie");
const marysia = new Citizen("Francja", "niemieckie");

marysia.toString();

// obiekt prototype zawsze aktualny
console.log(zenek.age);
Citizen.prototype.age = 21;
console.log(zenek.age);

// Rozszerzenie prototypu także wbudowanych konstruktorów

const arr = [5, 6, 7, 8];

Array.prototype.delete = function (index) {
  return this.splice(index, 1);
};

// czesc 3

//łańcuch prototypów

arr.__proto__; //array
arr.__proto__.__proto__; //object
arr.__proto__.__proto__.__proto__; //null

Object.prototype.age = 20; // tak się nie robi

zenek.__proto__.__proto__;

//Instanceof

arr instanceof Array;
arr instanceof Object;
arr instanceof Citizen;

zenek instanceof Citizen;
zenek instanceof Object;
zenek instanceof Function;

// Object.getPrototypeOf

Object.getPrototypeOf(arr);
Object.getPrototypeOf(zenek);

// constructor czy prototyp - co łączy instancję z funkcją konstruktora (także  klasą)

const janusz = new Citizen();
// janusz.__proto__ = Citizen.prototype
janusz.__proto__.constructor;

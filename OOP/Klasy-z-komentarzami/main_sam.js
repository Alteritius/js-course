// class Family {
//   constructor(name) {
//     this.name = name;
//     this.addMember2 = function () {
//       console.log("instancja");
//     };
//   }

//   addMember() {
//     console.log("prototyp");
//   }
// }

// const nowakowie = new Family("nowakowie");

// const Family2 = function (name) {
//   this.name = name;
// };

// const kowalscy = new Family2("kowalscy");

// Family2.prototype.addMember = function () {};

const Family2 = function () {};
function Family3() {}

class Family4 {}

const Family5 = class {};

class Family {
  constructor(members, ...names) {
    this.members = members;
    this.names = names;
  }
  addMember(newMember) {
    this.names.push(newMember);
    this.members++;
    console.log(
      `Nowy członek rodziny ${newMember}. Rodzina liczy teraz ${this.members} osób.`
    );
  }

  static makeFamily(...members) {
    return members;
  }
}

const kowalscy = new Family(3, "Jan", "Ewa", "Adam");

kowalscy.addMember("Jaś");

const kwiatkowscy = new Family(1, "Piotr");

//metody statyczne - bezpośrednio przypisane do klasy

class Animal {}
function Animal2() {}

const dog = new Animal();
const dog2 = Animal2();

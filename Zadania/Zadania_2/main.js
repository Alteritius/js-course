//Zadanie 1
const numbers = [0, 0, -1];

if (numbers[0] + numbers[2] > numbers[1]) {
  console.log(
    "Suma pierwszego i ostatniego elementu jest większa niż drugi element"
  );
} else if (numbers[0] + numbers[2] < numbers[1]) {
  console.log(
    "Suma pierwszego i ostatniego elementu NIE jest większa niż drugi element"
  );
} else {
  console.log(
    "Suma pierwszego i ostatniego elementu oraz drugi element są sobie równe"
  );
}

//Zadanie 2

const firstArray = [1, 2, 3];

const secondArray = [4, 5, 6, 7];

if (firstArray.length > secondArray.length) {
  console.log("Pierwsza tablica jest dłuższa");
} else if (firstArray.length < secondArray.length) {
  console.log("Druga tablica jest dłuższa");
} else {
  console.log("Tablice mają taką samą długość");
}

//Zadanie 3

const fruits = ["pear", "banana", "orange"];
const fruits_v2 = ["apple", "banana", "orange"];

const checkedArray = fruits_v2;

if (checkedArray[0] === "apple") {
  console.log("pierwszy element tablicy to 'apple'");
} else {
  console.log("pierwszy element tablicy to NIE 'apple'");
}

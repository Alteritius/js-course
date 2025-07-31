// Zadanie 1

let suma = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}

console.log("Suma liczb parzystych od 1 do 100 wynosi: " + suma);

// Zadanie 2

let stars = "";
const h = 6;

for (let i = 0; i < h; i++) {
  stars += "*";

  console.log(stars);
}

// inny sposób

// const h = 6;

// for (let i = 0; i <= h - 1; i++) {
//   let stars = "";

//   for (let j = 0; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// Zadanie 3

const threshold = 50;

let count = 0;

let i = 1;

while (i <= threshold) {
  if (i % 3 === 0) {
    count++;
  }
  i++;
}

console.log(count);

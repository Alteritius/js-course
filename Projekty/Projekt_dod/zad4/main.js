numberOfSquares = (a, b) => {
  let smaller = 0;
  let sum = 0;
  if (a > b || a === b) {
    smaller = b;
  } else {
    smaller = a;
  }

  for (let i = 0; i < smaller; i++) {
    let result = (a - i) * (b - i);
    console.log(`Ilość kwadratów ${i + 1} x ${i + 1}: ${result}`);
    sum += result;
  }
  console.log(`Razem: ${sum} kwadratów`);
};

numberOfSquares(4, 5);

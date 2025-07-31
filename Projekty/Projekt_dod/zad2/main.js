console.log("works");

const arr = [4, 3, 5, 34, 7];

addNumbersFromArray = (numbers = []) => {
  let sum = 0;

  console.log(numbers.reduce((prev, next) => prev + next, 0));
};

addNumbersFromArray(arr);

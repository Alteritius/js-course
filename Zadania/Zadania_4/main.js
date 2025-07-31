// Zadanie 1

const calculateAverage = function (numberArray) {
  let sum = 0;
  numberArray.forEach((element) => (sum += element));
  console.log(sum / numberArray.length);
};

calculateAverage([1, 2, 3, 4, 5]);

// Zadanie 2

const filterEvenNumbers = function (allNumbers) {
  evenNumbers = [];

  //   allNumbers.forEach(element % 2 === 0 ? (evenNumbers += element) : null);
  for (let i = 0; i < allNumbers.length; i++) {
    if (allNumbers[i] % 2 === 0) {
      evenNumbers.push(allNumbers[i]);
    }
  }

  console.log(evenNumbers);
};

filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

//Zadanie 3

const countOccurences = function (array, element) {
  let count = 0;

  if (!array.includes(element)) {
    console.log("bruh, element doesn't exist in the array");
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        count++;
      }
    }
    console.log(count);
  }
};

countOccurences(["apple", "banana", "apple", "orange", "banana"], "apple");

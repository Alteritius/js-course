console.log("works");

const arr = [4, 3, 5, 34, 7];

addNumbersFromArray = () => {
  let sum = 0;
  // 1a
  //   const newArr = arr.map((element) => (sum += element));
  //   console.log(newArr[newArr.length - 1]);

  // 1b

  for (const number of arr) {
    sum += number;
  }
  console.log(sum);
};

addNumbersFromArray(arr);

function addScope(a, b) {
  let sum = 0;
  if (b > arr.length) b = arr.length;
  for (let i = a; i < b; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

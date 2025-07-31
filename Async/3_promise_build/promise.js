// const promise = new Promise((resolve, reject) => {
//   //   resolve("Promise is resolved");
//   setTimeout(() => {
//     resolve("Promise is resolved");
//   }, 3000);
//   console.log("Promise is running");

//   //   reject("Promise is rejected");
// });

// promise
//   .then((data) => {
//     console.log("Info: ", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("after promise");

// 2

// const promise = new Promise((resolve, reject) => {
//   const data = '{"name": "John", "age": 30}';
//   resolve(data);
// });

// promise
//   .then((jsonData) => {
//     const data = JSON.parse(jsonData);
//     console.log(data);
//     console.log(typeof data);
//     // return data;
//   })
//   .then((data) => {
//     // console.log(data.name);
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error: " + error);
//   });

// 3

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1 - ok");
    // reject();
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("promise2 - ok");
    reject("promise2 - nie ok");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3 - ok");
    // reject();
  }, 1000);
});

// console.log(promise);

// promise.then(() => {
//   console.log(promise);
// });

// all

Promise.all([promise1, promise2, promise3])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally((data) => {
    console.log("finally " + data);
  });

// finally
// promise1
//   .then(() => {
//     console.log("then");
//   })
//   .then(() => {
//     console.log("then2");
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

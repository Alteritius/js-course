function fetchData1(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wysłany request");
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, 2000);
  });
}

function fetchData2(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wysłany request");
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, 5000);
  });
}

Promise.all([
  fetchData1("https://jsonplaceholder.typicode.com/users/1"),
  fetchData2("https://jsonplaceholder.typicode.com/users/2"),
])
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("zakończono"));

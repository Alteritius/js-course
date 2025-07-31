// tutaj rozwiązanie

const btn = document.querySelector("body button");
// const list = document.querySelector("body ul");
const list = [...document.querySelectorAll("body ul li")];

for (let i = 0; i < list.length; i++) {
  list[i].style.fontSize = "15px";
}

let counter = 1;

const showAndGrow = function () {
  if (counter === 1) {
    for (let i = 0; i < list.length; i++) {
      list[i].style.display = "block";
    }
  } else {
    // list.forEach((element) => {
    //   console.log(element);
    //   console.log(element.style.fontSize);
    //   let fontSize = parseInt(element.style.fontSize);
    //   console.log(fontSize);
    //   fontSize++;
    //   element.style.fontSize = fontSize + "px";
    // });
    for (let i = 0; i < list.length; i++) {
      let fontSize = parseInt(list[i].style.fontSize);
      fontSize++;
      list[i].style.fontSize = fontSize + "px";
    }
  }

  counter++;
};

btn.addEventListener("click", showAndGrow);

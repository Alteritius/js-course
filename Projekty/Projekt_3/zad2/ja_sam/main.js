let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement("button");
  btn.textContent = "Dodaj 10 elementów listy";
  document.body.appendChild(btn);
  document.body.appendChild(document.createElement("ul"));
};

const createLiElements = () => {
  const listContainer = document.querySelector("body ul");
  for (let i = 0; i < 10; i++) {
    const element = document.createElement("li");
    element.textContent = "element " + orderElement;
    element.style.fontSize = size + "px";
    listContainer.appendChild(element);
    size++;
    orderElement++;
  }
};

init();

const btn = document.querySelector("button");

btn.addEventListener("click", createLiElements);

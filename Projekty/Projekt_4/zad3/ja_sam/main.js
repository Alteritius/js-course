const div = document.querySelector("div");

//określenie początkowych koordynatów kwadratu
let divX = 150;
let divY = 50;

div.style.left = divX + "px";
div.style.top = `${divY}px`;

//ważna flaga
let drawActive = false;

let insertDivX;
let insertDivY;

//kliknięcie
div.addEventListener("mousedown", (e) => {
  div.style.backgroundColor = "gray";
  drawActive = true;

  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
  console.log(insertDivX, insertDivY);
});

//poruszanie myszką
div.addEventListener("mousemove", (e) => {
  if (drawActive) {
    divX = e.clientX;
    divY = e.clientY;
    div.style.left = `${divX - insertDivX}px`;
    div.style.top = `${divY - insertDivY}px`;
  }
});

//odkliknięcie
div.addEventListener("mouseup", () => {
  div.style.backgroundColor = "black";
  drawActive = false;
});

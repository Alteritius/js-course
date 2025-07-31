/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

// let red = 100;
// let green = 100;
// let blue = 100;

let colorValue = 0;

let red = colorValue;
let green = colorValue;
let blue = colorValue;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// document.body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  console.log(colorValue);

  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0))
  //tutaj twój kod
  // wersja 1 - instrukcja if
  // if (e.keyCode === 38) {
  //   colorValue += 5;
  // } else if (e.keyCode === 40) {
  //   colorValue -= 5;
  // }

  // wersja 2 - instrukcja switch

  switch (e.which) {
    case 38:
      colorValue += 5;

    case 40:
      colorValue -= 5;
  }
};

window.addEventListener("keydown", changeColor);

// "use strict";

this; //obiekt window w zakresie globalnym

const fn = function () {
  //   this.a = 5;
  console.log(this.name);
};

const obj = {
  name: "Adam",
  showName: fn, //referencja do funkcji
};

const fun = fn;

// fun();

// fn();
obj.showName();

const outside = obj.showName;

// outside();

document.addEventListener("click", function () {
  console.log(this);
  const inside = function () {
    console.log(this);
  };
  inside();
});

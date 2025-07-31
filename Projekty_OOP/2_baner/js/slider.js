import Slide from "./slide.js";
// console.log(new Slide());
export default class Slider {
  #image;
  #active;
  #h1;
  #slides;
  #time;
  #dots;
  #indexInterval;
  constructor(
    slideList,
    imageSelector,
    h1Selector,
    dotsSelector,
    time = 3000,
    active = 0
  ) {
    this.#image = document.querySelector(imageSelector);
    this.#h1 = document.querySelector(h1Selector);
    this.#dots = [...document.querySelectorAll(dotsSelector)];
    this.#time = time;
    this.#active = active;
    this.#slides = [];
    this.#indexInterval = null;

    for (const slide of slideList) {
      this.#addSlide(new Slide(slide.img, slide.text));
    }

    console.log(this.#slides);

    window.addEventListener("keydown", (e) => this.#keyChangeSlide(e));
  }

  #addSlide(slide) {
    this.#slides.push(slide);
  }

  start() {
    // this.indexInterval = setInterval(this.changeSlide, this.time);
    this.#indexInterval = setInterval(() => this.#changeSlide(), this.#time);
  }

  #changeDot() {
    const activeDot = this.#dots.findIndex((dot) =>
      dot.classList.contains("active")
    );
    this.#dots[activeDot].classList.remove("active");
    this.#dots[this.#active].classList.add("active");
  }

  #changeSlide() {
    console.log(this);
    this.#active++;
    if (this.#active === this.#slides.length) {
      this.#active = 0;
    }
    this.#image.src = this.#slides[this.#active].image;
    this.#h1.textContent = this.#slides[this.#active].text;
    this.#changeDot();
  }

  // // Klawisze
  #keyChangeSlide(e) {
    if (e.keyCode == 37 || e.keyCode == 39) {
      clearInterval(this.#indexInterval);
      e.keyCode == 37 ? this.#active-- : this.#active++;
      if (this.#active === this.#slides.length) {
        this.#active = 0;
      } else if (this.#active < 0) {
        this.#active = this.#slides.length - 1;
      }
      this.#image.src = this.#slides[this.#active].image;
      this.#h1.textContent = this.#slides[this.#active].text;
      this.#changeDot();
      this.start();
    }
  }
}

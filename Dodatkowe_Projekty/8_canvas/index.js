class DrawingApp {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.painting = false;
    this.#init();
    this.#initEvents();
  }

  #init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = 'white'; //domyśly kolor podczas rysowania, domyślny jest czarny, a jako że takie mamy tło to dajemy biały
    this.ctx.lineWidth = 25;
    this.ctx.lineCap = 'round';
  }

  #initEvents() {
    //metody na myszkę
    this.canvas.addEventListener('mousedown', (e) => this.#startPosition(e)); //pierwszy sposób
    this.canvas.addEventListener('mouseup', this.#endPosition.bind(this)); //drugi sposób
    this.canvas.addEventListener('mousemove', this.#draw.bind(this));

    //metody na mobile/dotyk
    this.canvas.addEventListener('touchstart', (e) => this.#startPosition(e)); //pierwszy sposób
    this.canvas.addEventListener('touchend', this.#endPosition.bind(this)); //drugi sposób
    this.canvas.addEventListener('touchmove', this.#draw.bind(this));
  }

  #startPosition(e) {
    console.log('start');
    this.painting = true;
    this.#draw(e);
  }

  #endPosition() {
    console.log('koniec');
    this.painting = false;
    this.ctx.beginPath();
  }

  #draw(e) {
    if (!this.painting) return;
    else {
      console.log('rysuję');
      //   this.ctx.beginPath(); //zamknij to co rysuje, w skrócie
      let x = e.clientX || e.touches[0].clientX;
      let y = e.clientY || e.touches[0].clientY;

      this.ctx.lineTo(x, y); //do podanego punktu narysuj linię
      this.ctx.stroke(); // wypełnij
      //   this.ctx.beginPath();
      this.ctx.moveTo(x, y);
    }
  }

  changeColor(color) {
    this.ctx.strokeStyle = color;
    console.log(color);
  }
}

const app = new DrawingApp();

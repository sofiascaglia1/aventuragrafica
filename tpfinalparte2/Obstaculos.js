class Obstaculo {
  constructor(x, y, ancho, alto, c) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.c = c;
    this.velocidad = 5; 
  }

  mover() {
    this.x -= this.velocidad; 
    if (this.x + this.ancho < 0) {
      this.reaparecer();
    }
  }

  reaparecer() {
    this.x = width + random(100, 300);
    this.y = random(300, 420);
  }

  dibujar() {
    fill(this.c);
    rect(this.x, this.y, this.ancho, this.alto);
  }
}

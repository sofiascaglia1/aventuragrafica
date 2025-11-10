class Bala {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 6;
    this.radio = 10;
    this.miColor = color(0, 0, 255);
  }

  mover() {
    this.x -= this.velocidad;
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.x, this.y, this.radio * 2);
  }

  fueraDePantalla() {
    return this.x < -this.radio;
  }

  colisionaCon(personaje) {
    return (
      this.x + this.radio > personaje.posX &&
      this.x - this.radio < personaje.posX + 50 &&
      this.y + this.radio > personaje.posY &&
      this.y - this.radio < personaje.posY + 50
    );
  }
}

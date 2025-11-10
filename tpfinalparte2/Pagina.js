class Pagina {
  constructor(x, y) {
    this.posX = x;
    this.posY = y - 50; // un poco arriba del obstáculo
    this.ancho = 25;
    this.alto = 25;
    this.recolectada = false;
    this.miColor = color(255, 255, 0);
  }

  dibujar() {
    if (!this.recolectada) {
      fill(this.miColor);
      rect(this.posX, this.posY, this.ancho, this.alto);
    }
  }

  fueRecolectada(personaje) {
    return (
      !this.recolectada &&
      personaje.posX < this.posX + this.ancho &&
      personaje.posX + 50 > this.posX &&
      personaje.posY < this.posY + this.alto &&
      personaje.posY + 50 > this.posY
    );
  }
}

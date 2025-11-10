class Obstaculo {
  constructor(x, y, ancho, alto, c, tienePagina) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.c = c;
    this.velocidad = 5;

    this.tienePagina = tienePagina;
    this.paginaRecolectada = false;
  }

  mover() {
    this.x -= this.velocidad;
    if (this.x + this.ancho < 0) {
      this.reaparecer();
    }
  }

  reaparecer() {
    this.x = width + random(200, 400);
    this.y = random(320, 420);
    this.tienePagina = random() < 0.1;
    this.paginaRecolectada = false;
  }

  dibujar() {
    fill(this.c);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  dibujarPagina() {
    fill(255, 255, 0);
    rect(this.x + this.ancho / 2 - 12, this.y - 35, 25, 25);
  }

  personajeTocaPagina(personaje) {
    let pagX = this.x + this.ancho / 2 - 12;
    let pagY = this.y - 35;
    let pagAncho = 25;
    let pagAlto = 25;

    return (
      personaje.posX < pagX + pagAncho &&
      personaje.posX + 50 > pagX &&
      personaje.posY < pagY + pagAlto &&
      personaje.posY + 50 > pagY
    );
  }
}

class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 0);
    this.vida = 5;

    this.velY = 0;
    this.gravedad = 0.8;
    this.suelo = posY;
  }

  dibujar() {
    fill(this.miColor);
    rect(this.posX, this.posY, 50, 50);
  }

  caer() {
    this.velY += this.gravedad;
    this.posY += this.velY;

    if (this.posY > this.suelo) {
      this.posY = this.suelo;
      this.velY = 0;
    }
  }

  saltar() {
    if (this.posY >= this.suelo) {
      this.velY = -15;
    }
  }

  detectarColision(obstaculos) {
    let estaSobreAlgo = false;

    for (let o of obstaculos) {
      let dentroHorizontal =
        this.posX + 50 > o.x && this.posX < o.x + o.ancho;

      let tocandoPorArriba =
        this.posY + 50 >= o.y && this.posY + 50 <= o.y + 15;

      if (dentroHorizontal && tocandoPorArriba && this.velY >= 0) {
        this.posY = o.y - 50;
        this.velY = 0;
        this.suelo = o.y - 50;
        estaSobreAlgo = true;
        break;
      }
    }

    if (!estaSobreAlgo) {
      this.suelo = 400;
    }
  }
}

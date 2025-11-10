class Enemigo {
  constructor() {
    this.posX = 550;
    this.posY = 400;
    this.miColor = color(0, 255, 0);
    this.balas = [];
    this.tiempoDisparo = 0;
    this.intervalo = 90; // cada 90 frames aprox.
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 50, 50);

    // Mover y dibujar las balas
    for (let i = this.balas.length - 1; i >= 0; i--) {
      let b = this.balas[i];
      b.mover();
      b.dibujar();

      // Eliminar si sale de pantalla
      if (b.fueraDePantalla()) {
        this.balas.splice(i, 1);
      }
    }

    // Disparar cada cierto tiempo
    this.tiempoDisparo++;
    if (this.tiempoDisparo > this.intervalo) {
      this.disparar();
      this.tiempoDisparo = 0;
    }
  }

  disparar() {
    let nuevaBala = new Bala(this.posX - 25, this.posY);
    this.balas.push(nuevaBala);
  }
}

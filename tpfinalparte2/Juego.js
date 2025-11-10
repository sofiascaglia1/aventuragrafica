class Juego {
  constructor() {
    this.Bala = [];
    this.paginasRecolectadas = 0;
    this.crearEnemigo();
    this.crearPersonaje();
    this.crearObstaculos();
  }

  crearEnemigo() {
    this.Enemigo = new Enemigo();
  }

  crearPersonaje() {
    this.Personaje = new Personaje(100, 400);
  }

  crearObstaculos() {
  this.obstaculos = [];

  let cantidad = 6;
  let distanciaMinima = 200;
  let posX = 300;
  let ultimoTuvoPagina = false;

  for (let i = 0; i < cantidad; i++) {
    let ancho = random(60, 120);
    let alto = 30;
    let y = random(200, 420);
    let col = color(random(100,255), random(100,255), random(100,255));

    // Asegurar que no se superpongan
    if (i > 0) {
      posX += distanciaMinima + ancho + random(50, 100);
    }

    // Determinar si tendrá página (con menor probabilidad y sin repetir)
    let tienePagina = !ultimoTuvoPagina && random() < 0.1;
    ultimoTuvoPagina = tienePagina;

    this.obstaculos.push(new Obstaculo(posX, y, ancho, alto, col, tienePagina));
  }
}


  dibujar() {
    this.Personaje.caer();
    this.Personaje.detectarColision(this.obstaculos);
    this.Personaje.dibujar();
    this.Enemigo.dibujar();

    for (let obs of this.obstaculos) {
      obs.mover();
      obs.dibujar();

      // 🔸 si el obstáculo tiene página y no fue recolectada
      if (obs.tienePagina && !obs.paginaRecolectada) {
        obs.dibujarPagina();

        // comprobar si el personaje la tocó
        if (obs.personajeTocaPagina(this.Personaje)) {
          obs.paginaRecolectada = true;
          this.paginasRecolectadas++;
        }
      }
    }
// Verificar si alguna bala tocó al personaje
for (let i = 0; i < this.Enemigo.balas.length; i++) {
  let b = this.Enemigo.balas[i];
  if (b.colisionaCon(this.Personaje)) {
    this.Personaje.vida--;
    this.Enemigo.balas.splice(i, 1); // eliminar bala
    i--;
  }
}

// Mostrar la vida
fill(0);
textSize(20);
text("Vida: " + this.Personaje.vida, 20, 60);

// Si la vida llega a 0, perder
if (this.Personaje.vida <= 0) {
  textSize(40);
  fill(255, 0, 0);
  text("¡Perdiste! 💀", width / 2 - 100, height / 2);
  noLoop();
}

    // 🔹 mostrar contador
    fill(0);
    textSize(20);
    text("Páginas: " + this.paginasRecolectadas, 20, 30);

    // 🔹 condición de victoria
    if (this.paginasRecolectadas >= 5) {
      textSize(40);
      fill(0, 255, 0);
      text("¡Ganaste! 🏆", width / 2 - 100, height / 2);
      noLoop();
    }
  }
}

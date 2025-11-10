class Juego{
 constructor(){
   this.crearEnemigo();
   this.crearPersonaje();
   this.crearObstaculos();
   this.Bala = [];
}
crearEnemigo(){
   this.Enemigo = new Enemigo;
}
crearPersonaje(){
   this.Personaje= new Personaje(100,400);
}

crearObstaculos() {
  this.obstaculos = [];
  this.paginas = []; 
  let cantidad = 5;
  let distanciaMinima = 150;
  let posX = 300;

  for (let i = 0; i < cantidad; i++) {
    let ancho = random(60, 120);
    let alto = 30;
    let y = random(300, 420);
    let col = color(random(100,255), random(100,255), random(100,255));

    
    this.obstaculos.push(new Obstaculo(posX, y, ancho, alto, col));
    posX += ancho + distanciaMinima; 
     // Mover y dibujar páginas
for (let i = 0; i < this.paginas.length; i++) {
  let pag = this.paginas[i];
  pag.x -= 2; // hace que la página se mueva a la izquierda, igual que los obstáculos
  pag.dibujar();
}

     if (random() < 0.5) {
      this.paginas.push(new Pagina(posX + ancho / 2, y));
}
  }
}
dibujar(){
  this.Personaje.caer();
this.Personaje.detectarColision(this.obstaculos);
this.Personaje.dibujar();
  this.Enemigo.dibujar();
  for (let i = 0; i < this.Bala.length; i++) {
    this.Bala[i].mover();
    this.Bala[i].dibujar();
  }

  for (let i = 0; i < this.obstaculos.length; i++) {
  this.obstaculos[i].mover();   
  this.obstaculos[i].dibujar(); 
}
  // Páginas
  let paginasRecolectadas = 0;

for (let i = 0; i < this.paginas.length; i++) {
  let pag = this.paginas[i]; // accedemos a cada página por índice

  pag.dibujar();

  if (pag.fueRecolectada(this.Personaje)) {
    pag.recolectada = true;
  }

  if (pag.recolectada) {
    paginasRecolectadas++;
  }
}


  // Mostrar contador
  fill(0);
  textSize(20);
  text("Páginas: " + paginasRecolectadas, 20, 30);

  // Condición de victoria
  if (paginasRecolectadas >= 5) {
    textSize(40);
    fill(0, 255, 0);
    text("¡Ganaste! 🏆", width / 2 - 100, height / 2);
    noLoop(); // detiene el juego
  }
}
iniciar(){


}
gano(){

}
perdio(){
}
}

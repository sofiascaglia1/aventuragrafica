let objJuego;


function setup() {
createCanvas(640,480);
  objJuego= new Juego();
}


function draw() {
  background(220);
objJuego.dibujar();

}
function keyPressed() {
  if (key === ' ' || keyCode === UP_ARROW) {
    objJuego.Personaje.saltar();
  }
}

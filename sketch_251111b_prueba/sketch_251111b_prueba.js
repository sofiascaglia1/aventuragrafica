let objJuego;
//let dipper;
//let fondo;
//let ojo;
//let bala;
//let corazon;

function preload(){
  dipper= loadImage("data/dipper.png");
  fondo= loadImage("data/bosque.png");
  ojo= loadImage("data/ojo.png");
   fragmento= loadImage("data/fragmento.png");
   corazon= loadImage("data/corazon.png");
   imgPerdiste = loadImage("data/perdiste.png");
   imgObstaculo= loadImage("data/roca.png");
   imgPagina= loadImage("data/pagina.jpg");
}


function setup() {
createCanvas(640,480);
objJuego= new Juego();
}


function draw() {
  background(230);
objJuego.dibujar()
}

function keyPressed() {
  if (key === ' ' || keyCode === UP_ARROW) {
    objJuego.objPersonaje.saltar();
  }
  if ((key === 'r' || key === 'R') && objJuego.perdio) {
    objJuego.reiniciar();
}
   
  }

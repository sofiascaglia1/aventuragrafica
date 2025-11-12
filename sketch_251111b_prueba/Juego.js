class Juego{
  constructor(){
    this.objFondo = new Fondo(fondo);
  this.objPersonaje= new Personaje(50,350);
  this.objOjo= new Enemigo(ojo,500, 360);
  this.perdio= false;
  this.obstaculos = [];
   for (let i = 0; i < 3; i++) {
     let tienePag = random() < 0.5;
  let x = width + i * 250; // los separa entre sí
  let y = random(330, 400);
      this.obstaculos.push(new Obstaculos(x, y, tienePag));
    }
  }
//this.


//instrucciones()

//crearEnemigo()

crearPersonaje(){
this.objPersonaje = new Personaje;
}
//crearObstaculos()

dibujar(){
 
 this.objFondo.dibujar();
  if (!this.objPersonaje.vivo) {
  this.perdio = true;
}

if (this.perdio) {
  this.perdiste();
  return;
}
 if(!this.perdio){
   this.objFondo.mover();
 }
 
  this.objPersonaje.caer();
this.objPersonaje.dibujar();

 this.objOjo.dibujar();
  this.objOjo.disparar();
  
  this.objPersonaje.detectarColision(this.objOjo.balas);
 
for (let i = 0; i < this.obstaculos.length; i++) {
 let obs = this.obstaculos[i];
  obs.mover();
  obs.mostrar();
  
   if (obs.personajeSobre(this.objPersonaje)) {
    this.objPersonaje.posY = obs.y - 100;
    this.objPersonaje.velY = 0;
  }

  if (obs.colisionPagina(this.objPersonaje)) {
    obs.paginaRecolectada = true;
    this.contadorPaginas++;
  }
}
  
  this.mostrarVidas();
  
  if (!this.objPersonaje.vivo) {
  this.perdio = true;
}

if (this.perdio) {
  this.perdiste();
  return;
}
  } 
mostrarVidas() {
  for (let i = 0; i < this.objPersonaje.vida; i++) {
    image(corazon, 20 + i * 40, 20, 30, 25);
  }
}

//ganaste()

perdiste(){
  imageMode(CENTER);
  image(imgPerdiste, width / 2, height / 2 - 100, 300, 100);

  // Texto
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("No lograste esquivar los ataques del ojo malvado", width / 2, height / 2 + 50);
  text("Tocá R para reiniciar", width / 2, height / 2 + 100);
  imageMode(CORNER);
 textAlign(CORNER);
}

reiniciar() {
  imageMode(CORNER);
 this.objFondo = new Fondo(fondo);
this.objPersonaje = new Personaje(50, 350);
 this.objOjo = new Enemigo(ojo, 500, 360);
 this.perdio = false;
    
}
}

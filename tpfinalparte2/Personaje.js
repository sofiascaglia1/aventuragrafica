class Personaje{
 constructor(posX,posY){
 this.posX=posX;
 this.posY=posY;
 this.miColor=color(255,0,0);
  this.vida=1;
  
  this.velY = 0;       
    this.gravedad = 0.8; 
    this.suelo = posY;  
 }
dibujar(){
  fill(this.miColor);
  rect(this.posX, this.posY, 50,50);

}
caer(){
  this.velY += this.gravedad;
  this.posY += this.velY;

  if (this.posY > this.suelo) {
    this.posY = this.suelo;
    this.velY = 0;
  }
}
estaVivo(){

}
saltar(){
  if (this.posY >= this.suelo) {
    this.velY = -15;
  }
}
detectarColision(obstaculos) {
  let estaSobreAlgo = false;

  for (let i = 0; i < obstaculos.length; i++) {
    let o = obstaculos[i];

    let dentroHorizontal =
      this.posX + 50 > o.x && this.posX < o.x + o.ancho;

    let tocandoPorArriba =
      this.posY + 50 >= o.y && this.posY + 50 <= o.y + 15; // margen vertical

    // Si está cayendo y toca un obstáculo por arriba
    if (dentroHorizontal && tocandoPorArriba && this.velY >= 0) {
      this.posY = o.y - 50; 
      this.velY = 0;
      this.suelo = o.y - 50;
      estaSobreAlgo = true;
      break; // se apoya solo en uno a la vez
    }
  }

  // Si no está sobre ningún obstáculo, el suelo vuelve al original
  if (!estaSobreAlgo) {
    this.suelo = height - 80;
  }

}
}

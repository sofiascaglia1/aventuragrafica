class Enemigo {
constructor(){
 this.posX= 20;
 this.posY= 50;
 this.miColor= color(0,255,0);
 this.vida= 1;
 this.Bala= []
 }
 dibujar(){
   fill(this.miColor);
ellipse(this.posX, this.posY, 50,50);
}
correr(){

}
estaVivo(){

}
disparar(){
}

 
}

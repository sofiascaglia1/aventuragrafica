class Personaje{
constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.dipper = dipper
    this.vida = 5;
    this.velY = 0;
    this.gravedad = 0.8;
    this.suelo = posY;
    this.vivo= true;
  }
  dibujar(){
    if (this.vivo) {
  image(this.dipper, this.posX, this.posY,80,100);
  } 
  }
  
  saltar(){
    if (this.posY >= this.suelo) {
      this.velY = -15;
    }
  }
  
  caer(){
    if (!this.vivo) return;
    this.velY += this.gravedad;
    this.posY += this.velY;

    if (this.posY > this.suelo) {
      this.posY = this.suelo;
      this.velY = 0;
  }
  } 
   detectarColision(balas) {
     if (!this.vivo) return;
    for (let i = 0; i < balas.length; i++) {
      let b = balas[i];
      if (b.x < this.posX + 50 && b.x + 20 > this.posX && b.y < this.posY + 100 && b.y + 5 > this.posY) {
        this.vida--;
        b.x = 900; // manda la bala fuera de pantalla
        
         if (this.vida <= 0) {
          this.morir();
        }
      }
    }
  }
  
  morir(){
  this.vivo = false;
    this.velY = 0;
    // opcional: detener el juego o mostrar algo
  }
}

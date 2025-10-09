let img = [];
let estado;
let dialogos =[];
let botones= [];
let mostrarTextos = true;
//let song;

function preload(){
  dialogos= loadStrings('/assets/dialogos.txt');  botones= loadStrings('/assets/botones.txt'); 
  cueva= loadImage('assets/cueva.png'); marcas= loadImage('assets/marcas.png'); luciernagas= loadImage('assets/luciernagas.png'); diario= loadImage('assets/diario.png'); img[0]= loadImage('assets/img0.jpg'); img[1]= loadImage('assets/img1.jpg'); img[2]= loadImage('assets/img2.jpg'); img[3]= loadImage('assets/img3.jpg'); img[4]= loadImage('assets/img4.jpg'); img[5]= loadImage('assets/img5.jpg'); img[6]= loadImage('assets/img6.jpg'); img[7]= loadImage('assets/img7.jpg'); img[8]= loadImage('assets/img8.jpg'); img[9]= loadImage('assets/img9.jpg'); img[10]= loadImage('assets/img10.jpg'); img[11]= loadImage('assets/img11.jpg'); img[12]= loadImage('assets/img12.jpg'); img[13]= loadImage('assets/img13.jpg'); img[14]= loadImage('assets/img14.jpg'); img[15]= loadImage('assets/img15.jpg'); img[16]= loadImage('assets/img16.jpg'); img[17]= loadImage('assets/img17.jpg'); img[18]= loadImage('assets/img18.jpg'); img[19]= loadImage('assets/img19.jpg'); img[20]= loadImage('assets/img20.jpg'); img[21]= loadImage('assets/img21.jpg'); img[22]= loadImage('assets/img22.jpg');
  estado=0;
}

function setup() {
  //song= loadSound('assets/
createCanvas(640,480);
}


function draw() {
  background(255);
if( estado== 0){
  image(img[0], 0, 0, width, height);
  mostrarBoton(400,297, 100, 40, botones[0]);
  fill(66,55,56);
  rect(20,13,495,40,15);
  fill(219,191,135);
  text("Aventura Gráfica Interactiva Web [Etapa 1]",30,40);
  
  
} else if(estado==1){
  image(img[1], 0, 0, width, height);
   mostrarBoton(275, 400, 100, 40, botones[1]);
  
} else if(estado==2){
  image(img[2], 0, 0, width, height);
  mostrarDiario(70, 300, 80, 100);
  if (mostrarTextos){
    mostrarBoton(355, 25, 250, 100, dialogos[0]);
   mostrarBoton(45, 50, 250, 100, dialogos[1]);
}else {
mostrarBoton(300,250,250,50,botones[3]);
mostrarBoton(300,325,250,50,botones[4]);
mostrarBoton(300,400,250,50,botones[5]);
}
}

else if(estado==3){
  image(img[3], 0, 0, width, height);
  mostrarCueva(348,85,290,250);
  mostrarMarcas(140,0,320,360);
  mostrarLuciernagas(0,125,172,310);
}
else if(estado==4){
  image(img[4], 0, 0, width, height);
  
  if (mostrarTextos){
    mostrarBoton(275, 400, 100, 40, botones[1]);
  
}else {
    mostrarBoton(355, 140, 250, 70, dialogos[2]);
    mostrarBoton(275, 400, 100, 40, botones[1]);
  
}
}

else if(estado==5){
  image(img[5], 0, 0, width, height);
   if (mostrarTextos){
    mostrarBoton(275, 400, 100, 40, botones[1]);
  
}else {
   mostrarBoton(445,320,185,40,botones[9]);
   mostrarBoton(405,385,220,40,botones[10]);
}
}
else if(estado==6){
  image(img[6], 0, 0, width, height);
  if (mostrarTextos){
  mostrarBoton(20,100,400,60,dialogos[3]);
  mostrarBoton(120,180,500,80,dialogos[4]);
   mostrarBoton(275, 400, 100, 40, botones[1]);
   }else {
      mostrarBoton(50,300,200,40,botones[11]);
   mostrarBoton(50,350,150,40,botones[12]);
      mostrarBoton(50,400,280,40,botones[13]);
   }
     
}else if(estado==7){
  image(img[7], 0, 0, width, height);
  mostrarBoton(25,400,250,40,botones[14]);
  
  
}else if(estado==8){
  image(img[8], 0, 0, width, height);
  mostrarBoton(165,100,350,110,dialogos[11]);
  mostrarBoton(50,380,200,70,dialogos[12]);
  
}else if(estado==9){
  image(img[9], 0, 0, width, height);
  if(mostrarTextos){
    mostrarBoton(275, 400, 100, 40, botones[1]);
  }else{
   mostrarBoton(280,130,350,70,dialogos[5]);
  mostrarBoton(10,230,180,100,dialogos[6]);
  mostrarBoton(275, 400, 100, 40, botones[1]);
  }
  
}else if(estado==10){
  image(img[10], 0, 0, width, height);
   mostrarBoton(20,160,100,35,"Fin");
  mostrarBoton(20,210,100,35,botones[2]);
}else if(estado==11){
  image(img[11], 0, 0, width, height);
}else if(estado==12){
  image(img[12], 0, 0, width, height);
  mostrarBoton(50,25,280,90,dialogos[14]);
  mostrarBoton(349,320,280,80,dialogos[15]);
  mostrarBoton(20,210,100,35,botones[1]);
}else if(estado==13){
  image(img[13], 0, 0, width, height);
}else if(estado==14){
  image(img[14], 0, 0, width, height);
}else if(estado==15){
  image(img[15], 0, 0, width, height);
}else if(estado==16){
  image(img[16], 0, 0, width, height);
  mostrarBoton(50,25,280,90,dialogos[16]);
  mostrarBoton(380,370,80,50,botones[1]);
}else if(estado==17){
  image(img[17], 0, 0, width, height);
}else if(estado==18){
  image(img[18], 0, 0, width, height);
  
}else if(estado==19){
  image(img[19], 0, 0, width, height);
  mostrarBoton(20,160,100,35,"Fin");
  mostrarBoton(20,210,100,35,botones[2]);
}else if(estado==20){
  image(img[20], 0, 0, width, height);
  mostrarBoton(20,160,100,35,"Fin");
  mostrarBoton(20,210,100,35,botones[2]);
  //mostrarBoton (100,500,300,400, dialogos[10]);
  
}else if(estado==21){
  image(img[21], 0, 0, width, height);
  mostrarBoton(20,50,250,150,dialogos[13]);
  mostrarBoton (50,300,100,35,"Fin");
  mostrarBoton (50,340,100,35,botones[2]);
}else if(estado==22){
  image(img[22], 0, 0, width, height);
}else if(estado==23){
  fill(0);
  rect(0,0,width,height);
 // fill(255);
  //text("Desarrollado por Jorgelina Rotondo & Sofia Scaglia. \n Inspirado en Gravity Falls (Alex Hirsch). \n Hecho para PMIW – TP Final Parte 1.",CENTER, CENTER);

}

console.log(mouseX);
console.log(mouseY);
}

function mouseMoved(){
if ( mouseX > 400 && mouseX < 488 && mouseY > 297 && mouseY < 297+35){
}


}


function mousePressed(){
  //if(song.isPlaying()){
  
  //}
  
  if (estado == 0 && botonPresionado(400, 297, 88, 35)) {
    estado = 1;
    return;
  }
  if (estado == 1 && botonPresionado(275, 400, 98, 35)) {
    estado = 2;
    return;
  }
  if (estado == 2 && mostrarTextos && botonPresionado(60, 314, 90, 86)) {
    mostrarTextos = false;
    return;
  }
  if (estado == 2 && !mostrarTextos && botonPresionado(300, 250, 250, 45)) {
    estado = 3;
    return;
  }
  if (estado == 2 && !mostrarTextos && botonPresionado(300, 325, 250, 50)) {
    estado = 12;
    return;
  }
  if (estado == 2 && !mostrarTextos && botonPresionado(300, 400, 250, 50)) {
    estado = 16;
    return;
  }
  if (estado == 3 && botonPresionado(0, 60, 135, 300)) {
    estado = 4;
    mostrarTextos = true;
    return;
  }if (estado == 3 && botonPresionado(140,0,320,360)) {
    mostrarTextos= true;
    estado = 6;
    return;
  }if (estado == 3 && botonPresionado(348,85,290,250)) {
    mostrarTextos= true;
    estado = 9;
    return;
  }
  if (estado == 4 && mostrarTextos && botonPresionado(275, 400, 100, 40)) {
    mostrarTextos = false;
    return;
  }
  if (estado == 4 && !mostrarTextos && botonPresionado(275, 400, 100, 40)) {
    estado = 5;
    return;
  }
  if (estado == 5 && botonPresionado(445,320,185,40)) {
    estado = 19;
    return;
  }
  if (estado == 5 && botonPresionado(405,385,220,40)) {
    estado = 20;
    return;
  }if (estado == 6 && mostrarTextos && botonPresionado(275, 400, 100, 40)) {
    mostrarTextos = false;
    return;
  }if (estado == 6 && !mostrarTextos && botonPresionado(50,300,200,40)) {
    estado = 7;
    return; 
  }if (estado == 6 && !mostrarTextos && botonPresionado(50,350,150,40)) {
    estado = 21;
    return;   
}if (estado == 6 && !mostrarTextos && botonPresionado(50,400,280,40)) {
    estado = 3;
    return;   
} if(estado==7 && botonPresionado(25,400,250,40)){
estado=8;
return;
}



  if(estado==9 && mostrarTextos && botonPresionado(275, 400, 100, 40)) {
   mostrarTextos= false;
   return;
  }
  if (estado==9 && !mostrarTextos && botonPresionado(275, 400, 100, 40)){
    estado=10;
    return;
  } if (estado == 19 && botonPresionado(20,210,100,35)) {
    estado = 23;
    return;
} if (estado == 10 && botonPresionado(20,210,100,35)) {
    estado = 23;
    return;
} if(estado ==21 && mostrarTextos (20,50,200,150)){
  mostrarTextos= false;
  return;
  
 }if(estado==16 && botonPresionado(380,370,80,50)){
   
 }
  
  
  
}

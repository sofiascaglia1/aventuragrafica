let img = [];
let estado;


function preload(){
  diario= loadImage('assets/diario.png');
  img[0]= loadImage('assets/img0.jpg');
  img[1]= loadImage('assets/img1.jpg');
  img[2]= loadImage('assets/img2.jpg');
  img[3]= loadImage('assets/img3.jpg');
  img[4]= loadImage('assets/img4.jpg');
  img[5]= loadImage('assets/img5.jpg');
  img[6]= loadImage('assets/img6.jpg');
  img[7]= loadImage('assets/img7.jpg');
  img[8]= loadImage('assets/img8.jpg');
  img[9]= loadImage('assets/img9.jpg');
  img[10]= loadImage('assets/img10.jpg');
  img[11]= loadImage('assets/img11.jpg');
  img[12]= loadImage('assets/img12.jpg');
  img[13]= loadImage('assets/img13.jpg');
  img[14]= loadImage('assets/img14.jpg');
  img[15]= loadImage('assets/img15.jpg');
  img[16]= loadImage('assets/img16.jpg');
  img[17]= loadImage('assets/img17.jpg');
  img[18]= loadImage('assets/img18.jpg');
  img[19]= loadImage('assets/img19.jpg');
  img[20]= loadImage('assets/img20.jpg');
  img[21]= loadImage('assets/img21.jpg');
  img[22]= loadImage('assets/img22.jpg');
  estado=0;
}

function setup() {
createCanvas(640,480);
}


function draw() {
  background(255);
if( estado== 0){
  image(img[0], 0, 0, width, height);
  fill(66,55,56);
  rect(400,297,90,35,15);
  fill(219,191,135);
  text("Inicio",415,323);
  textSize(30);
  textSize(25);
  fill(66,55,56);
  rect(20,13,495,40,15);
  fill(219,191,135);
  text("Aventura Gráfica Interactiva Web [Etapa 1]",30,40);
  
  
} else if(estado==1){
  image(img[1], 0, 0, width, height);
  
} else if(estado==2){
  image(img[2], 0, 0, width, height);
  mostrarDiario(70, 300, 80, 100);
}
else if(estado==3){
  image(img[3], 0, 0, width, height);
}
else if(estado==4){
  image(img[4], 0, 0, width, height);
}
else if(estado==5){
  image(img[5], 0, 0, width, height);
}
else if(estado==6){
  image(img[6], 0, 0, width, height);
}else if(estado==7){
  image(img[7], 0, 0, width, height);
}else if(estado==8){
  image(img[8], 0, 0, width, height);
}else if(estado==9){
  image(img[9], 0, 0, width, height);
}else if(estado==10){
  image(img[10], 0, 0, width, height);
}else if(estado==11){
  image(img[11], 0, 0, width, height);
}else if(estado==12){
  image(img[12], 0, 0, width, height);
}else if(estado==13){
  image(img[13], 0, 0, width, height);
}else if(estado==14){
  image(img[14], 0, 0, width, height);
}else if(estado==15){
  image(img[15], 0, 0, width, height);
}else if(estado==16){
  image(img[16], 0, 0, width, height);
}else if(estado==17){
  image(img[17], 0, 0, width, height);
}else if(estado==18){
  image(img[18], 0, 0, width, height);
}else if(estado==19){
  image(img[19], 0, 0, width, height);
}else if(estado==20){
  image(img[20], 0, 0, width, height);
}else if(estado==21){
  image(img[21], 0, 0, width, height);
}else if(estado==22){
  image(img[22], 0, 0, width, height);
}

console.log(mouseX);
console.log(mouseY);
}

function mouseMoved(){
if ( mouseX > 400 && mouseX < 488 && mouseY > 297 && mouseY < 297+35){
}


}


function mousePressed(){
   if ( mouseX > 400 && mouseX < 488 && mouseY > 297 && mouseY < 297+35){
  estado = 1;
}
}



function keyPressed(){
  if(key===' '){
    estado++;
  }
}

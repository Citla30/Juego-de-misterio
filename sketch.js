var carta, cartaimg;
var fondo,fondimg;
var flecha, flechaimg;
var flecha3,flecha3img;
var intro,introimg;
var historia, histoimg;
var ab,abimg;
var cartaa,cartaaimg;
var texto,textoimg;
var texto1,texto1img;
var texto2,texto2img;
var texto3,texto3img;
var texto4,texto4img;
var texto5,texto5img;
var texto6,texto6img;
var texto7,texto7img;
var texto8,texto8img;
var texto9,texto9img;
var texto10,texto10img;
var regalo, regaloimg;
var cel,celimg;
var flecha2,flecha2img;
var fondo2, fondo2img;
var libro, libroimg;
var texto11,texto11img;
var fondo3,fondo3img;
var fondo7,fondo7img;
var texto12, texto12img;
var texto13, texto13img;
var texto14, texto14img;
var texto15, texto15img;
var texto17, texto17img;
var texto18, texto18img;
var texto19, texto19img;
var texto20, texto20img;
var libro1, libro1img;
var libro3, libro3img;
var libro2, libro2img;
var fondo6,fondo6;
var fondoc, fondocimg;
var cape, capeimg;
var texto22, texto22img;
var gameOver, gameOverimg;
var carta2, carta2img;
var carta33,carta33img;
var carta44,carta44img;
var carta3,carta3img;
var carta55,carta55img;
var pista2,pista2;
var carta4,carta4img;


function preload() {
carta2img=loadImage("IMG_20210910_131258~2.jpg");
carta33img=loadImage("ac44.png");
cartaimg=loadImage("carta.png");
introimg=loadImage("intro.png");
fondoimg=loadImage("fondo.jpg");
flechaimg=loadImage("flecha.png");
flecha3img=loadImage("flecha.png");
abimg=loadImage("ac-1.png");
textoimg=loadImage("llp.png");
texto1img=loadImage("llf.png");
texto2img=loadImage("familiares.png");
texto3img=loadImage("policia.png");
texto4img=loadImage("ar.png");
texto5img=loadImage("regalos.png");
regaloimg=loadImage("regalo.png");
celimg=loadImage("telefono.png");
historiaimg=loadImage("historia.png");
texto6img=loadImage("texto6.png");
texto7img=loadImage("texto8.png");
texto8img=loadImage("texto9.png");
texto9img=loadImage("texto 10.png");
texto10img=loadImage("texto11.png");
flecha2img=loadImage("flecha.png");
fondo2img=loadImage("fondo5.jpg");
libroimg=loadImage("libro del tren.png");
texto11img=loadImage("texto12.png");
fondo3img=loadImage("fondo3.jpg");
texto12img=loadImage("texto13.png");
texto13img=loadImage("texto14.png");
texto14img=loadImage("texto15.png");
texto15img=loadImage("texto16.png");
texto16img=loadImage("texto17.png");
libro1img=loadImage("lili.jpg");
libro2img=loadImage("marta.jpg");
libro3img=loadImage("sandra.jpg");
fondo6img=loadImage("cuentos.jpeg");
  fondocimg=loadImage("enredados.jpg");
  capeimg=loadImage("hermanos.jpg");
  texto17img=loadImage("texto18.png");
  texto18img=loadImage("texto19.png");
  texto19img=loadImage("texto20.png");
  texto20img=loadImage("texto21.png");
  fondo7img=loadImage("fondo2.jpg");
  texto22img=loadImage("c1-1.png");
  gameOverimg=loadImage("gameOver-1.png");
}

function setup(){
 createCanvas(500,500);
  
  fondo=createSprite(250,250);
  fondo.addImage(fondoimg);
  fondo.scale=1.5;
  
  fondo3=createSprite(250,250);
  fondo3.addImage(fondo3img);
  fondo3.scale=1;
  fondo3.visible=false;
  
  carta2=createSprite(250,50);
  carta2.addImage(carta2img);
  carta2.scale=0.1;
  carta2.visible=false;
  
  carta33=createSprite(250,250);
  carta33.addImage(carta33img);
  carta33.scale=0.4;
  carta33.visible=false;
  
  fondo7=createSprite(250,250);
  fondo7.addImage(fondo7img);
  fondo7.scale=1;
  fondo7.visible=false;
  
  fondoc=createSprite(250,250);
  fondoc.addImage(fondocimg);
  fondoc.scale=0.6;
  fondoc.visible=false;
  
  cape=createSprite(50,450);
  cape.addImage(capeimg);
  cape.scale=0.5;
  cape.visible=false;
  
  intro=createSprite(250,250);
  intro.addImage(introimg);
  intro.scale=0.8;
  intro.visible=true;
  
  historia=createSprite(250,250);
  historia.addImage(historiaimg);
  historia.scale=0.6;
  historia.visible=false;
  
  carta=createSprite(250,250);
  carta.addImage(cartaimg);
  carta.scale=0.5;
  carta.visible=false;
  
  flecha=createSprite(250,420);
  flecha.addImage(flechaimg);
  flecha.scale=0.3;
  
  flecha2=createSprite(250,370);
  flecha2.addImage(flecha2img);
  flecha2.scale=0.3;
  flecha2.visible=false;
  
  flecha3=createSprite(350,450);
  flecha3.addImage(flecha3img);
  flecha3.scale=0.3;
  flecha3.visible=false;
  
  texto=createSprite(200,50);
  texto.addImage(textoimg);
  texto.scale=0.5;
  texto.visible=false;
  
  texto1=createSprite(150,250);
  texto1.addImage(texto1img);
  texto1.scale=0.5;
  texto1.visible=false;
  
  texto2=createSprite(200,350);
  texto2.addImage(texto2img);
  texto2.scale=0.5;
  texto2.visible=false;
  
  texto3=createSprite(165,150);
  texto3.addImage(texto3img);
  texto3.scale=0.5;
  texto3.visible=false;
  
  texto22=createSprite(250,250);
  texto22.addImage(texto22img);
  texto22.scale=0.5;
  texto22.visible=false;
  
  gameOver=createSprite(250,150);
  gameOver.addImage(gameOverimg);
  gameOver.visible=false;
  
  
  cel=createSprite(450,400);
  cel.addImage(celimg);
  cel.scale=0.4;
  cel.visible=true;
  
  regalo=createSprite(250,400);
  regalo.addImage(regaloimg);
  regalo.scale=0.4;
  regalo.visible=false;
    
  
  texto4=createSprite(250,320);
  texto4.addImage(texto4img);
  texto4.scale=0.6;
  texto4.visible=false;
  
  texto5=createSprite(200,160);
  texto5.addImage(texto5img);
  texto5.scale=0.5;
  texto5.visible=false;
  
  texto6=createSprite(200,400);
  texto6.addImage(texto6img);
  texto6.scale=0.5;
  texto6.visible=false;
 
  
  texto7=createSprite(100,470);
  texto7.addImage(texto7img);
  texto7.scale=0.5;
  texto7.visible=false;
  
  
  texto8=createSprite(300,470);
  texto8.addImage(texto8img);
  texto8.scale=0.5;
  texto8.visible=false;
  
  texto9=createSprite(130,100);
  texto9.addImage(texto9img);
  texto9.scale=0.5;
  texto9.visible=false;
  
  texto10=createSprite(360,250);
  texto10.addImage(texto10img);
  texto10.scale=0.5;
  texto10.visible=false;
  
  texto16=createSprite(150,150);
  texto16.addImage(texto16img);
  texto16.scale=0.5;
  texto16.visible=false;
  
  fondo2=createSprite(250,250);
  fondo2.addImage(fondo2img);
  fondo2.scale=1;
  fondo2.visible=false;
  
  libro=createSprite(420,200);
  libro.addImage(libroimg);
  libro.scale=0.6;
  libro.visible=false;
  
  texto11=createSprite(100,140);
  texto11.addImage(texto11img);
  texto11.scale=0.5;
  texto11.visible=false;
  
  texto12=createSprite(200,100);
  texto12.addImage(texto12img);
  texto12.scale=0.5;
  texto12.visible=false;
  
  texto13=createSprite(200,300);
  texto13.addImage(texto13img);
  texto13.scale=0.5;
  texto13.visible=false;
  
  texto14=createSprite(250,100);
  texto14.addImage(texto14img);
  texto14.scale=0.5;
  texto14.visible=false;
  
  texto15=createSprite(100,350);
  texto15.addImage(texto15img);
  texto15.scale=0.5;
  texto15.visible=false;
  
  fondo6=createSprite(250,250);
  fondo6.addImage(fondo6img);
  fondo6.scale=1.5;
  fondo6.visible=false;
  
  libro1=createSprite(400,100);
  libro1.addImage(libro1img);
  libro1.scale=1;
  libro1.visible=false;
  
  libro2=createSprite(200,100);
  libro2.addImage(libro2img);
  libro2.scale=1;
  libro2.visible=false;
  
  libro3=createSprite(400,350);
  libro3.addImage(libro3img);
  libro3.scale=1;
  libro3.visible=false;
  
  texto17=createSprite(250,250);
  texto17.addImage(texto17img);
  texto17.scale=0.5;
  texto17.visible=false;
  
  texto18=createSprite(250,280);
  texto18.addImage(texto18img);
  texto18.scale=0.5;
  texto18.visible=false;
  
  texto19=createSprite(150,50);
  texto19.addImage(texto19img);
  texto19.scale=0.5;
  texto19.visible=false;
  
  texto20=createSprite(250,480);
  texto20.addImage(texto20img);
  texto20.scale=0.5;
  texto20.visible=false;
  
  ab=createSprite(250,380);
  ab.addImage(abimg);
  ab.scale=0.5;
  ab.visible=false;
  
 
}

function draw(){
background("black");
drawSprites();
    
  if(mousePressedOver(flecha)){
    intro.visible=false;
    flecha.destroy();
    historia.visible=true;
    flecha2.visible=true;
  }
  if(mousePressedOver(texto)){
    texto3.visible=true;
    fondo3.visible=true;
  }
  if(mousePressedOver(texto1)){
    texto2.visible=true;
    fondo3.destroy();
  }
  if(mousePressedOver(cel)){
    texto1.visible=true;
    texto.visible=true;
    cel.destroy();
    carta2.destroy();
    carta33.destroy();
  }
  if(keyDown("enter")){
    regalo.visible=true;
    texto4.visible=true;
    texto1.destroy();
    texto3.destroy();
    texto.destroy();
    texto2.destroy();
    
  }
  if(keyDown("space")){
   texto5.visible=true;
    texto6.visible=true;
    texto7.visible=true;
    texto8.visible=true;
    regalo.destroy();
    texto4.destroy();
  }
  if(mousePressedOver(flecha2)){
    historia.destroy();
    carta.visible=true;
    flecha2.destroy();
    ab.visible=true;
  }
  if(keyDown("b")){
    texto9.visible=true;
    texto5.destroy();
    texto6.destroy();
    texto7.destroy();
    texto8.destroy();
    texto10.visible=true;
    gameOver.visible=false;
    texto22.destroy();
  }
  if(keyDown("k")){
    texto9.destroy();
    texto10.destroy();
    fondo2.visible=true;
    libro.visible=true;
    texto11.visible=true;
  }
  if(mousePressedOver(libro)){
    libro.destroy();
    fondo2.destroy();
    texto11.destroy();
    texto13.visible=true;
    texto12.visible=true;
  }
  if(keyDown("r")){
    carta2.visible=true;
    carta33.visible=true;
    carta.destroy();
    ab.destroy();
  }
  if(keyDown("l")){
    texto15.visible=true;
    texto14.visible=true;
    texto13.destroy();
    texto12.destroy();
    fondo6.visible=false;
    libro1.visible=false;
    libro2.visible=false;
    libro3.visible=false;
    flecha3.visible=true;
  }
  if(mousePressedOver(flecha3)){
    texto15.visible=false;
    texto14.visible=false;
    fondo6.visible=true;
    libro1.visible=true;
    libro2.visible=true;
    libro3.visible=true;
    flecha.visible=false;
  }
  if(mousePressedOver(libro1)){
    flecha3.destroy();
    texto15.destroy();
    texto14.destroy();
    fondo6.destroy();
    libro1.destroy();
    libro2.destroy();
    libro3.destroy();
    texto16.visible=true;
    cape.visible=true;
    fondoc.visible=true;
  }
  if(mousePressedOver(cape)){
   texto17.visible=true;
    fondoc.destroy();
    texto16.destroy();
    cape.destroy();
  }
  if(keyDown("z")){
     fondo7.visible=true;
    texto18.visible=true;
     texto19.visible=true;
     texto20.visible=true;
  }
  if(keyDown("a")){
    texto22.visible=true;
    gameOver.visible=true;
    texto5.visible=false;
    texto6.visible=false;
    texto7.visible=false;
    texto8.visible=false;
  }
}
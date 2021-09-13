//creating variables

var jaxon, jaxon_running;
var bomb, bombImg;
var path, pathImg;
var coin, coinImg;
var energyD, EDImg;
var invisibleBoundary, invisibleBoundary1;



function preload(){
                    //preload Images
                    jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
                    bombImg = loadImage("bomb.png");
                    pathImg = loadImage("path.png");
                    coinImg = loadImage("coin.png");
                    EDImg = loadImage("energyDrink.png");
  
}

function setup(){
                  createCanvas(400,400);
                  //create sprites here
                  path = createSprite(200,200,15,20)
                  path.addImage("road",pathImg);
                  path.velocityY=4

                  //creating runner sprite
                  jaxon = createSprite(200,350,10,10);
                  jaxon.addAnimation("running",jaxon_running);
                  jaxon.scale = 0.05;
                  

                  //creating invisible boundaries
                  invisibleBoundary = createSprite(50,200,10,400);
                  invisibleBoundary1 = createSprite(350,200,10,400);

                  invisibleBoundary.visible=false;
                  invisibleBoundary1.visible=false;


}

function draw() {
                    background("black");

                    //code to reset the background
                    if(path.y > 400){
                      path.y=height/2
                    }

                    jaxon.x = mouseX;

                    if(jaxon.isTouching(invisibleBoundary)){
                      jaxon.x=200
                    }
                    else if (jaxon.isTouching(invisibleBoundary1)){
                      jaxon.x=200
                    }

                    drawSprites();

}

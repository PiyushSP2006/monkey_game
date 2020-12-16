
var monkey , monkey_running;
var banana ,bananaImage, obstacleImage;
var ground,movground;
var foodGroup, obstacleGroup;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  bg=loadImage("bg1.PNG");
  movground=loadImage("moving_ground.png");
  
}



function setup() {
  createCanvas(600,265);
  
  monkey=createSprite(150,220);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  
  
  ground = createSprite(200,263,300,30);
  ground.addImage("ground",movground);
  movground.resize(800,30);
  ground.x = ground.width /2;
  ground.velocityX=-2;
  
  invground=createSprite(550,263,600,30);
  invground.addImage(movground);
  
  ground.depth=invground.depth+1;
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
  score=0;
}


function draw() {
  background(bg);

    if(keyDown("space")&&monkey.y>=150) {
    monkey.velocityY = -12.5;

  }
    monkey.velocityY = monkey.velocityY + 0.8;
    
  
  if(ground.x<0){
    ground.x = ground.width /2;
  }
  

  
  
  edges=createEdgeSprites();
  monkey.collide(edges);
  //monkey.collide(invground);
  
  
  
  score = score + Math.round(getFrameRate()/60);
  
  textSize(25);
  fill("black");
  text("Survival Time: "+score,380,50);
  
  createObstacles();
  
  createBanana()
  

  
 
  
  drawSprites();
}

function createObstacles(){
  if(frameCount%300===0){
   var obstacle=createSprite(550,220,2,2);
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2;
    obstacle.velocityX=-2;
    obstacle.lifetime=300;
    
    obstacleGroup.add(obstacle);
  }
   
}
function createBanana(){
  if(frameCount%80===0){
    var y=Math.round(random(70,120))
     
    var banana=createSprite(600,y,20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.scale=0.14;
    banana.lifetime=270;
    
    foodGroup.add(banana);
  }
}





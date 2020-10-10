var ground, ground1_img, ground2_img, ground3_img, ground4_img, ground5_img
var ship, ship_img
var earth, earth_img
var astroid,astroidGrp, astroid1, astroid2, astroid3
var rand
var alength = 0 
var al = 0
var life = 3
var PLAY = 1
var END = 0
var gameState = PLAY

function preload()
{
  ground1_img = loadImage("images/space.png")
  ground2_img = loadImage("images/pluto.jpg")
  ground3_img = loadImage("images/ura.jpg")
  ground4_img = loadImage("images/mars.jpg")
  ground5_img = loadImage("images/nep.jpg")
  earth_img = loadImage("images/earth.png")
  ship_img = loadImage("images/rocky.png")
  astroid1 = loadImage("images/astroid1.png")
  astroid2 = loadImage("images/astroid2.png")
  astroid3 = loadImage("images/astroid3.png")
  astroidGrp = new Group()
}

function setup() {
  createCanvas(600,800);
  ground = createSprite(300,400,600,800)
  ground.addImage(ground1_img)

  earth = createSprite(300,900,100,100)
  earth.addImage("earth", earth_img)
  earth.scale = 1.15

  ship = createSprite(300,650,50,50)
  ship.addImage("ship", ship_img)
  ship.scale = 0.4

}

function draw() {
  background(255,255,255);  
  if(gameState === PLAY)
  {
    if(ground.y>800){
      ground.y = 400
    }
    ground.velocityY = 1
    earth.velocityY = 1
    earth.lifetime = 70
   
    if(keyIsDown(LEFT_ARROW) && ship.x>0)
    {
      ship.x = ship.x-10
    }
    if(keyIsDown(RIGHT_ARROW) && ship.x<600)
    {
      ship.x = ship.x+10
    }

    if (frameCount % 100 === 0) {
      astroid = createSprite(random(200, 500), 0, 30, 30);
      astroid.y = 0
      astroid.velocityY = 15;
      astroid.scale = 0.3
      var rand = Math.round(random(1,3));
      switch(rand){
          case 1: astroid.addImage("astroid1",astroid1);
          break;
          case 2: astroid.addImage("astroid2",astroid2);
          break;
          case 3: astroid.addImage("astroid3",astroid3);
          break;
      }
     astroidGrp.add(astroid)
    }
    
    for(var i = 0; i< astroidGrp.length; i++)
  {
     
     if(astroidGrp.get(i).isTouching(ship))
     {
        //ship.destroy()
         life -=1 
        //gameState = END   
     }
    
  }

  alength = i

 

    if(life!==0 && alength === 30)
    {
      ground.addImage(ground4_img)
    }

  
  
  }
  else if(gameState === END)
  {
    
  }
  drawSprites();
  textSize(30)
  fill("white")
  text("Life"+life,50,100)
}


  


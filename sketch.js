var bg,bgImg;
var player, shooterImg, shooter_shooting;
//Declare variable for zombie & for zombie Image
var zombie,zombieImg;

//Declare varible for 3 hearts
var heart1,heart2,heart3;


//declare variable to load 3 heart Image
var heart1img,heart2img,heart3img;

//Declare variable for zombie group
var zombiegroup;


function preload()
{
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  bgImg = loadImage("assets/bg.jpeg");

  //Load heart Image
  heart1img= loadImage("assets/heart_1.png");
  heart2img= loadImage("assets/heart_2.png");
  heart3img= loadImage("assets/heart_3.png");

  

  //load zombie imgsdsdad
  zombieImg= loadImage("assets/zombie.png");

  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


   //creating sprites to depict lives remaining
   heart1=createSprite(displayWidth-150,40,20,20);
   heart1.addImage("heart1",heart1img);
   heart1.scale = 0.4
   heart1.visible=false
   heart2=createSprite(displayWidth-160,40,20,20);
   heart2.addImage("heart2",heart2img);
   heart2.scale = 0.4
   heart2.visible=false
   heart3=createSprite(displayWidth-200,40,20,20);
   heart3.addImage("heart3",heart3img);
   heart3.scale = 0.4
 
    //creating group for zombies    
    zombiegroup=new Group()


}

function draw() 
{
  background(0); 
  if(keyDown("UP_ARROW")||touches.length>0)
  {
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0)
  {
    player.y = player.y+30
  }

  if(keyWentDown("space"))
  {
    player.addImage(shooter_shooting);
  }
  else if(keyWentUp("space"))
  {
    player.addImage(shooterImg);
  }

//destroy zombie when player touches it
if(zombiegroup.isTouching(player)){
  for(var i=0;i<zombiegroup.length;i++){
    if(zombiegroup[i].isTouching(player)){
      zombiegroup[i].destroy()
    }
  }
}

//calling the function to spawn zombies
spawnZombie();


drawSprites();
}



//creating function to spawn zombies
function spawnZombie(){
  if(frameCount%50===0){
    zombie=createSprite(random(500,1100),random(100,500),40,40);
    zombie.addImage("zombie",zombieImg);
    zombie.scale=0.15;
    zombie.velocityX=-3;
    zombie.lifetime=400;
    zombiegroup.add(zombie )
    zombie.debug=true;
    zombie.setCollider("rectangle",0,0,400,400);
  }
  
}
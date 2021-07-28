var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating plddle and the ball
var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(150, 250, 20, 20);

var score = 0;

var gameState= "serve";

//first row of boxes
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

//second row of boxes
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

//
function draw() {
  background("white");
  
  textSize(15);
  stroke("red");
  text("Score : "+score,270,20);
  
  if(gameState == "serve"){
    text("Press Enter to serve ",120,300);
    //Moving the ball on pressing enter key
    if(keyDown("enter")){
      ball.velocityX = 3;
      ball.velocityY = 4;
      gameState = "play";
    }
  }
  //play state
  if(gameState == "play"){
    //Moving the paddle with mouse along the x-axis
    paddle.x=World.mouseX;
    if(ball.isTouching(bottomEdge)||score==16){
      gameState = "end";
    }
  }
  //end state
  if(gameState == "end"){
    ball.velocityX = 0;
    ball.velocityY = 0;
    ball.x = 200;
    ball.y = 200;
    text("Game Over!!",150,300);
    text("Press 'R' to restart",130,320);
    if(keyWentDown("R")){
      gameState = "serve";
    }
  }

  
  //destroying the boxes
  destroyBoxes();
  
  
  
  //Making the ball bounceOff the paddle and three sides of canvas
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);
  
  if(ball.isTouching(bottomEdge)){
    text("Your score is  "+score,157,222);
    ball.velocityX = 0;
    ball.velocityY = 0;
  }

  //
  paddle.x=World.mouseX;
  
  //you win message
  if(score===16){
    ball.velocityX =0;
    ball.velocityY = 0;
    text("You win ",157,222);
    
  }

  drawSprites();
}

function destroyBoxes(){
  if(ball.bounceOff(box1)){
     score = score+1;
    box1.destroy();
  }
  
  if(ball.bounceOff(box2)){
    score = score+1;
    box2.destroy();
  }
  if(ball.bounceOff(box3)){
    score = score+1;
    box3.destroy();
  }
  if(ball.bounceOff(box4)){
    score = score+1;
    box4.destroy();
  }
  
  if(ball.bounceOff(box5)){
    score = score+1;
    box5.destroy();
  }
  
  if(ball.bounceOff(box6)){
    score = score+1;
    box6.destroy();
  }
  
  if(ball.bounceOff(box7)){
    score = score+1;
    box7.destroy();
  }
  
  if(ball.bounceOff(box8)){
    score = score+1;
    box8.destroy();
  }
  
  if(ball.bounceOff(box9)){
    score = score+1;
    box9.destroy();
  }
  if(ball.bounceOff(box10)){
    score = score+1;
    box10.destroy();
  }
  
  if(ball.bounceOff(box11)){
    score = score+1;
    box11.destroy();
    
  }
  
  if(ball.bounceOff(box12)){
    score = score+1;
    box12.destroy();
  }
  
  if(ball.bounceOff(box13)){
    score = score+1;
    box13.destroy();
  }
  
  if(ball.bounceOff(box14)){
    score = score+1;
    box14.destroy();
  }
  
  if(ball.bounceOff(box15)){
    score = score+1;
    box15.destroy();
  }
  if(ball.bounceOff(box16)){
    score = score+1;
    box16.destroy();
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

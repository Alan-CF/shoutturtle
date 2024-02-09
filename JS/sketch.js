
var mic;
var vol;
let imgs = [];

function preload() {
    imgs = [loadImage("JS/images/normal.png"), loadImage("JS/images/scared.jpg")];

}
function setup() {
    createCanvas(windowWidth,windowHeight);
    
    mic = new p5.AudioIn();
    mic.start();
    getAudioContext().resume();
   
}

function draw() {
    background(255,255,255);
    vol = mic.getLevel();
    if (vol < 0.01) {
        image(imgs[0], (windowWidth/2 ) - 100, (windowHeight/2 ) - 100, 200, 200);
    } else {
        image(imgs[1], (windowWidth/2) - 100, (windowHeight/2) - 100, 200, 200);
    }
    
    text("Alan C", windowWidth - 50, windowHeight -10);
    text(" Esta pagina fue hecha para que Vicky\npueda asustar a las tortugas de regreso.\n(Haz 1 click y luego GRTITAAA)", (windowWidth/2) - 110, 100);
}

function touchStarted() {
    getAudioContext().resume();
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

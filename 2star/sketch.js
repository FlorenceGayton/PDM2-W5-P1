let canvas;
let wizard;
// base width and height for wizard
let wizW = 200;
let wizH = 100;


function preload(){
    wizard = loadImage("assets/pixil-layer-Background - Frame0.png");
}

function setup(){
    drawCanvas();
}

// check if window is resized
function windowResized(){
    drawCanvas();
}

// redraw canvas each time window is resized
function drawCanvas(){
    canvas = windowWidth / 2;
    createCanvas(canvas, canvas);
    background(0);

    // call wizard image
    imageMode(CENTER);
    image(wizard, 
        canvas / 2, canvas / 2, 
        (wizW / 100) * canvas, (wizH / 100) * canvas
    );
}
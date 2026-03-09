let img;
let bearButton;
let catButton;
let monkeyButton;

// declare container
let mainContainer;

function getAnimalImage(name){
    img = loadImage("assets/" + name + ".jpg");
}

function setup() {
    mainContainer = createDiv();
    mainContainer.style("width", "600px");
    mainContainer.style("margin", "auto");
    mainContainer.style("text-align", "center");

    let canvas = createCanvas(600, 400);
    canvas.parent(mainContainer);

    // create buttons
    bearButton = createButton("bear");
    bearButton.parent(mainContainer);

    catButton = createButton("cat");
    catButton.parent(mainContainer);

    monkeyButton = createButton("monkey");
    monkeyButton.parent(mainContainer);


    // show bear
    bearButton.mousePressed(function() {
        getAnimalImage("bear");
    });
    // show cat
    catButton.mousePressed(function() {
        getAnimalImage("cat");
    });
    // show monkey
    monkeyButton.mousePressed(function() {
        getAnimalImage("monkey");
    });
}

function draw() {
  background(157, 170, 210);
  // only show image if one has been loaded
  if (img !== undefined) {
    image(img, 0, 0, width, height);
  }
}

//load the image
function getAnimalImage(name) {
  img = loadImage("assets/" + name + ".jpg");
}

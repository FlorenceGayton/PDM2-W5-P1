let bear;
let cat;
let monkey;
let img;

function setup(){
    createCanvas(600, 600);
    // bear
    bear = createButton("bear");
    bear.position(200, 200);
    // cat
    cat = createButton("cat");
    cat.position(300, 200);
    // monkey
    monkey = createButton("monkey");
    monkey.position(400, 200);

}

function draw(){
    image(img, 0, 0);

}


function getAnimalImage(name){
    img = loadImage("assets/" + name + ".jpg");
}

img = "";
status = "";
function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 295, 80);
    noFill();
    stroke("#FF0000");
    rect(290, 65, 280, 335);
}

function modelLoaded(){
    console.log("Model is loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

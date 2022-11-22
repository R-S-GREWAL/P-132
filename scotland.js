img = "";
function setup()
{
    canvas = createCanvas(900,460);
    canvas.center();

}
function preload()
{
    img = loadImage('HD.jpg');
}
function draw()
{
    image(img, 0, 0, 900, 460);
    fill("#FF0000");
    text("Desk", 5, 345);
    noFill();
    stroke("FF0000");
    rect(1,350,310,110);
    
    fill("#FF0000");
    text("Desk", 265, 325);
    noFill();
    stroke("FF0000");
    rect(260,328,265,110);
    
    fill("#FF0000");
    text("Tub", 557, 345);
    noFill();
    stroke("FF0000");
    rect(552,350,75,50);
}


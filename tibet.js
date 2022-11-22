img = "";
function setup()
{
    canvas = createCanvas(900,460);
    canvas.center();

}
function preload()
{
    img = loadImage('tibet.jpg');
}
function draw()
{
    image(img, 0, 0, 900, 460);
    fill("#FF0000");
    text("Person", 350, 360);
    noFill();
    stroke("FF0000");
    rect(345,365,40,110);
    
}
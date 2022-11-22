img = "";
function setup()
{
    canvas = createCanvas(900,460);
    canvas.center();

}
function preload()
{
    img = loadImage('india.jpg');
}
function draw()
{
    image(img, 0, 0, 900, 460);
    
    fill("#FF0000");
    text("person", 90, 40);
    noFill();
    stroke("FF0000");
    rect(85,45,235,420);
    
    fill("#FF0000");
    text("Person", 235, 60);
    noFill();
    stroke("FF0000");
    rect(230,65,230,420);

    fill("#FF0000");
    text("Person", 405,45);
    noFill();
    stroke("FF0000");
    rect(400,50,260,410);

    fill("#FF0000");
    text("Person", 510,120);
    noFill();
    stroke("FF0000");
    rect(505,125,330,410);
    
}
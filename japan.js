img = "";
function setup()
{
    canvas = createCanvas(900,460);
    canvas.center();

}
function preload()
{
    img = loadImage('japan.jpg');
}
function draw()
{
    image(img, 0, 0, 900, 460);
    
    fill("#FF0000");
    text("Table", 140, 310);
    noFill();
    stroke("FF0000");
    rect(135,315,375,145);
    
    fill("#FF0000");
    text("Table", 350, 300);
    noFill();
    stroke("FF0000");
    rect(345,305,275,145);

    fill("#FF0000");
    text("Pillow", 507, 345);
    noFill();
    stroke("FF0000");
    rect(502,350,230,85);
    
}
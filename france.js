img = "";
function setup()
{
    canvas = createCanvas(900,460);
    canvas.center();

}
function preload()
{
    img = loadImage('france.jpg');
}
function draw()
{
    image(img, 0, 0, 900, 460);
    fill("#FF0000");
    text("Car", 38, 310);
    noFill();
    stroke("FF0000");
    rect(34,315,90,55);
    
    fill("#FF0000");
    text("Truck", 125, 270);
    noFill();
    stroke("FF0000");
    rect(120,275,95,85);
    
    fill("#FF0000");
    text("Car", 625, 303);
    noFill();
    stroke("FF0000");
    rect(620,308,88,65);
    
    fill("#FF0000");
    text("Scooter", 522, 307);
    noFill();
    stroke("FF0000");
    rect(522,312,40,60);
    
    fill("#FF0000");
    text("Traffic Light", 408, 192);
    noFill();
    stroke("FF0000");
    rect(417,197,35,180);

    fill("#FF0000");
    text("Car", 313, 313);
    noFill();
    stroke("FF0000");
    rect(308,318,70,43);

    fill("#FF0000");
    text("Tree", 125, 75);
    noFill();
    stroke("FF0000");
    rect(120,80,120,200);
}




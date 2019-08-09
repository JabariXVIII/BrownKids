function setup(){
        createCanvas(500,500); 
}

function draw() {
    fill(random(255),random(355), random(985));
    ellipse(random(500), random(400), random(70,40), random(20,70,47,10));  
    myRect(123, 395, 305, "red"); 
}


function myRect(x, y, size, color)
{
    fill(color);
    rect(x,y,size,size);
}

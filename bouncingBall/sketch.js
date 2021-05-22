function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    c = new Circle(width/2, height/2, 50);
    textSize(width/4);
    textAlign(CENTER, CENTER);
}
function draw() {
    textSize(width / 50);
    resizeCanvas(windowWidth, windowHeight);
    background(0,10,50);

    //xf = xi + vt + 1/2 at^2
    //vf^2 = vi^2 + 2ax

    if(c.pos.x < 0 || c.pos.x > width) c.velocity.x *= -1;
    if(c.pos.y > height - 50) c.velocity.y *= -1;
    else c.velocity.y += 0.1 * deltaTime/5;
    c.pos.x += c.velocity.x * deltaTime/5;
    c.pos.y += c.velocity.y * deltaTime/5;
    var t = "Velocity: " + c.velocity.y;
    var p = "Position: " + c.pos.x + " " + c.pos.y;
    fill(0, 102, 153)
    text(t, width/2, height/2 - 200);
    text(p, width/2, height/2 - 100);
    fill(255, 255, 255)

    c.draw()


    if(c.pos.y > height + 120 || c.pos.y < - 120) {
        c.pos.x = width/2;
        c.pos.y = height/2;
        c.velocity.y = 0;
    }

}

class Circle {
    constructor(x, y, r, m) {
        this.pos = createVector(x,y);
        this.velocity = createVector(8, 0);
        this.mass = m;
        this.diameter = r*2;
    }

    draw() {
        circle(this.pos.x , this.pos.y, this.diameter/2) 
    }
}
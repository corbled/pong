function Paddle(x, y) {
    this.x = x;
    this.y = y;
    this.yspeed = 0;


    this.dir = function (y) {
        this.yspeed = y;
    }

    this.update = function() {
        this.y = this.y + this.yspeed * scl;
        this.y = constrain(this.y, 35, height - 35);
    }

    this.show = function() {
        rectMode(CENTER);
        fill(255, 0, 0);
        rect(this.x, this.y, 10, 70);
    }

    



}
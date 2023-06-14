class Vec{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    plus(z,w) {
        this.x = this.x + z;
        this.y = this.y + w;
    }

    minus(z,w) {
        this.x = this.x - z;
        this.y = this.y - w;
    }
}

let p = new Vec(1,2);
p.plus(3,1)
p.minus(3,1)

console.log(p)
class Rubber{
    constructor(x,y,r){
    var options={
        restitution:0.3,
        friction: 5,
        density:1
    }
    this.body= Bodies.circle(x,y,r,options);
   this.r = r;
    World.add(world,this.body)

    }
    display(){
        fill("blue")
        stroke("white")
        strokeWeight(5);
        ellipseMode(RADIUS);
        ellipse( this.body.position.x, this.body.position.y,this.r,this.r);
        //ellipse( this.body.position.x, this.body.position.y,50,50)
    }
}
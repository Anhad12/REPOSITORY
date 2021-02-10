class Chain{
    constructor(bA,pB){
    var coptions = {
        length:10,
        stiffness:0.02,
        bodyA:bA,
        pointB:pB
        
    }
    this.sling1=loadImage("sprites/sling1.png");
    this.sling2=loadImage("sprites/sling2.png");
    this.sling3=loadImage("sprites/sling3.png");
    
    this.body= Constraint.create(coptions);
    World.add(world,this.body);
    }
    display(){
        image(this.sling1,200,105 )
        image(this.sling2,169,102 )
        if(this.body.bodyA){
       
        var posA= this.body.bodyA.position
        //x n y
        var pntB= this.body.pointB
        push();
        stroke(66,30,11)
        strokeWeight(5)
        if(posA.x<185){
        line(posA.x-20,posA.y,pntB.x+20, pntB.y+50);
        line(posA.x-20,posA.y,pntB.x+80, pntB.y+50);
        image(this.sling3,posA.x-25,posA.y-15,10,40)
       
        }
        else{
            line(posA.x-20,posA.y,pntB.x+20, pntB.y+50);
            line(posA.x-20,posA.y,pntB.x+80, pntB.y+50);
            image(this.sling3,posA.x+25,posA.y-15,10,40)
        }
        pop();
        }
    }

    fly(){
        this.body.bodyA=null;
    }
    attach(object){
    this.body.bodyA=object;
    }
}
/*
//CONNECTING 2 BODIES
class Chain{
    constructor(bA,bB){
    var coptions = {
        lenght:200,
        stiffness:0.04,
        bodyA:bA,
        bodyB:bB
    }
    this.body= Constraint.create(coptions);
    World.add(world,this.body);
    }
    display(){
        
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y)
    }
}
*/
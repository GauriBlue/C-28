class String{
    constructor(body1, body2){
        var options = {
            bodyA :body1,
            bodyB :body2,
            stiffness : 0.01,
            length : 10
        }
    
       this.string =  Constraint.create(options)
       World.add(world, this.string)
    }


display(){
    strokeWeight(3)
    stroke("white");
    line(this.string.bodyA.position.x, this.string.bodyA.position.y, this.string.bodyB.position.x,this.string.bodyB.position.y);
}


}
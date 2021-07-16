class Launcher {
    constructor(pointA,pointB) {
        var options = {
            pointA : pointA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10,
        }
        this.pointB = pointB;
        this.launch = Constraint.create(options);
        World.add(world,this.launch);
    
    }
    fly() {
        this.launch.pointA = null;
       }
   
    display() {
        if(this.launch.pointA) {
            strokeWeight(2);
            line(this.launch.pointA.position.x,this.launch.pointA.position.y,this.pointB.x,this.pointB.y);
        }
        
    }
}
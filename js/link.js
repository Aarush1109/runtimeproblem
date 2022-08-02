class Link{
    constructor(bodyA,bodyB){
        var lastlink=bodyA.body.bodies.length-2;
        //var posA=bodyA.body.bodies[lastlink].position;
        //var posB=bodyB.position;
        this.link=Constraint.create({
            bodyA:bodyA.body.bodies[lastlink],
            pointA:{x:0,y:0},
            bodyB:bodyB,
            pointB:{x:0,y:0},
            length:0,
            stiffness:0.01
        });
    World.add(engine.world,this.link);
    }


}
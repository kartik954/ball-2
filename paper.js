class Paper{
    constructor(x,y,radius){
        var options = { 
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        };
        this.body = MBodies.circle(x,y,radius/2,options);
        this.radius = radius/2;
        this.image = loadImage("spites/paper.png")
        MWorld.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        image(0,0,this.radius,this.radius);
        pop();
    }
};
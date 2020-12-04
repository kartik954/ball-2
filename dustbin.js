class Dustbin{
    constructor(){
        var options = {
            isStatic : true
        };
        this.rect1 = MBodies.rectangle(600,650,200,20,options);
        this.rect2 = MBodies.rectangle(490,610,20,100,options);
        this.rect3 = MBodies.rectangle(700,610,20,100,options);  
        MWorld.add(world,this.rect1);
	    MWorld.add(world,this.rect2);
	    MWorld.add(world,this.rect3);
    }
    display(){
        fill("yellow");
    rect(this.rect1.position.x,this.rect1.position.y,200,20);
    rect(this.rect2.position.x,this.rect2.position.y,20,100);
    rect(this.rect3.position.x,this.rect3.position.y,20,100);
    }
}
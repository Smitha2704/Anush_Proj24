class Paperball{
    constructor(x,y){
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }

        this.body=Bodies.circle(x,y,20,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
     display(){
        var angle=this.body.angle;

         push();
         //translate(this.body.position.x,this.body.position.y);
         //rotate(angle);
         fill("white")
         ellipse(this.body.position.x,this.body.position.y,40,40);
         pop();
     } 
}

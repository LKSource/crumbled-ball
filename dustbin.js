class Log{
    constructor(x,y,width,length){
       var log_options ={
           isStatic: true
       }
       this.body = Bodies.rectangle(x,y,width,length,log_options);
       this.width=width;
       this.length=length;
       World.add(world,this.body);
    }
    display(){
       fill("white");
       noStroke();
       rectMode(CENTER);
       rect(this.body.position.x,this.body.position.y,this.width,this.length);
    }
   }
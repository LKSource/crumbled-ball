class Ground{
 constructor(x,y,width,length){
 var options={
     isStatic:true
 }
 this.body=Bodies.rectangle(x,y,width,length,options);
 this.width=width
 this.length=length
 World.add(world,this.body);

 }
 display(){
 rectMode(CENTER)
 rect(this.body.position.x,this.body.position.y,this.width,this.length)
 }
}
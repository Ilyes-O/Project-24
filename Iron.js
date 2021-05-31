class Iron{
    constructor(x,y,width,height){
       var options = {
           'restitution':.8,
           'friction':.9,
           'dentity':30
       } 
       this.width = width;
       this.height = height;
       this.body = Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body)
    }
    display(){
     var ironAngle = this.body.angle;
     var ironPos=this.body.position; 
	 push(); 
	 translate(ironPos.x, ironPos.y); 
     rotate(ironAngle)
	 rectMode(CENTER) 
   	 strokeWeight(4); 
	 stroke("black"); 
	 fill("white");  
	 rect(0,0,this.width,this.height); 
	 pop(); 
    }
}
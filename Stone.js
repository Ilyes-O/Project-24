class Stone{
    constructor(x,y,width,height)
    {
        var options = {
            'restitution':.8,
            'friction':0.9,
            'density':12
        }
        this.width = width;
        this.height = height;
        this.options = options
		this.body=Bodies.rectangle(x, y , width, height, options)
		World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);
		rotate(angle);
		strokeWeight(4);
		stroke("black");
		fill("grey");
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
}
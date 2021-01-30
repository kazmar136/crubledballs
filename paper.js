class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width/13;
      this.height = height/7;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var paperpos=this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y)
      rectMode(CENTER)
      image(this.image, 100, 260, this.width, this.height);
      pop();
	}

}
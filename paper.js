class paper{
    constructor(x,y,width,height){
      var options = {
        isStatic :false,
        restitution:0.5,
        friction:0.3,
        density:1.2
      }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body)
    this.width = width;
    this.height = height;
    }
    show()
    {
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        fill("white")
    }   
}
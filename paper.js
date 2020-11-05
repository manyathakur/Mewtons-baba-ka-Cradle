class paper{
    constructor(x,y){

      this.papa = Bodies.circle(x,y,80,{isStatic:true,density:0.5});
      World.add(world,this.papa);
    }
    display(){
        push();
        translate(this.papa.position.x,this.papa.position.y);
        ellipse(0,0,80);
        pop();
    }
}
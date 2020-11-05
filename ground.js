class Ground{
    constructor(){
      var op ={
         restitution:0.9,
         isStatic:true
      }
      
      this.GG = Bodies.rectangle(400,50,400,10,op);
      World.add(world,this.GG);
    }
    earth(){
      rectMode(CENTER);
      fill("black");
      rect(400,50,400,10);
    }
}

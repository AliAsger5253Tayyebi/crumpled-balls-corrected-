class Paper {
constructor(x,y,width,height){

    var options = {
isStatic :false,
restitution:0.3,
friction: 0,
density:1.4}

this.body = Bodies.circle(x,y,23,options);

        this.image = loadImage('paper.png');
        World.add(world,this.body);

}

display(){
    push();
var pos = this.body.position;
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0,70,70);
pop();
}


}
class Image{
    constructor(x,y,radius){
    var options = {
    isStatic:false,
    density:1,
    restitution:0.2 
    }
this.body =Bodies.circle(x,y,radius,options)
this.radius=radius

//loading the image
this.image=loadImage('bird.png')

    World.add(world,this.body)
    
    }
    display(){
    var pos = this.body.position;
    //imageMode(CENTER)
  imageMode(CENTER)
    fill("blue");  
    //image
    image(this.image, pos.x, pos.y, 100,100);
    }
    }
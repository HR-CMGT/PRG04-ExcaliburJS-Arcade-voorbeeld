import { Actor, Rectangle, Color, Engine, Vector } from "excalibur"

export class Block extends Actor{
    speedX = 0;
    speedY = 0;

    constructor(){
        super({
            width: 50,
            height: 50,
            color: Color.Red
        });
    }

    setUp(){ this.speedY = -50; }
    setDown(){ this.speedY = 50; }
    setLeft(){ this.speedX = -50; }
    setRight(){ this.speedX = 50; }
    setNeutral(){
        this.speedX = 0;
        this.speedY = 0;
    }

    buttonToggle(){
        console.log('toggle');
        this.actions.scaleBy(new Vector(-.5, -.5), .1);
    }

    onPreUpdate(){
        // console.log(this.speedX+' '+this.speedY);
        this.vel = new Vector(this.speedX, this.speedY);
    }
}
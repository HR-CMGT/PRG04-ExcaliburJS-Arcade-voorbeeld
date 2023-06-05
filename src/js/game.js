import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Block } from './block'
import { Arcade } from "arcade-game"

export class Game extends Engine {
    #arcade;
    #joystickListener;

    block;

    constructor() {
        super({ width: 800, height: 600 })
        this.showDebug(true);
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        this.block = new Block();
        this.add(this.block);

        this.#arcade = new Arcade(this, false, true);
        this.#joystickListener = (e) => this.#joyStickFound(e);
        document.addEventListener("joystickcreated",  this.#joystickListener);

        document.addEventListener("joystick0up", () => this.block.setUp());
        document.addEventListener("joystick0down", () => this.block.setDown());
        document.addEventListener("joystick0left", () => this.block.setLeft());
        document.addEventListener("joystick0right", () => this.block.setRight());
        document.addEventListener("joystick0neutral", () => this.block.setNeutral());
        document.addEventListener("joystick0button0", () => this.block.buttonToggle());
        document.addEventListener("joystick0button1", () => this.block.buttonToggle());
        document.addEventListener("joystick0button2", () => this.block.buttonToggle());
        document.addEventListener("joystick0button3", () => this.block.buttonToggle());
        document.addEventListener("joystick0button4", () => this.block.buttonToggle());
        document.addEventListener("joystick0button5", () => this.block.buttonToggle());
    }

    onPreUpdate(){
        for (let joystick of this.#arcade.Joysticks) {
            joystick.update();
        }
    }

    #joyStickFound(e) {
        let joystick = this.#arcade.Joysticks[e.detail]
        
        // debug, this shows you the names of the buttons when they are pressed
        for (const buttonEvent of joystick.ButtonEvents) {
            document.addEventListener(buttonEvent, () => console.log(buttonEvent))
        }
    }

    disconnect() {
        document.removeEventListener("joystickcreated", this.#joystickListener)
    }
}

new Game()

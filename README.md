# Arcade Stick demo 2023

In dit project zie je hoe je de arcade stick kan toevoegen aan een excalibur project.


## 🕹 🎮 Joystick and Gamepad

The arcade class will detect if you use a gamepad 🎮 or the arcade cabinet joystick 🕹

### Add library to package.json
Run next line in your project terminal:
 ```cli
npm install git@github.com:HR-CMGT/arcade-game.git
 ```

 ### Usage in game class
 ```javascript
import { Arcade } from "arcade-game"

export class Game {

    #arcade;
    #joystickListener;

    constructor() {
        //TODO: add reference to startGame()
    }

    startGame() {
        this.#arcade = new Arcade(this, false, true);

        this.#joystickListener = (e) => this.#joyStickFound(e)
        document.addEventListener("joystickcreated",  this.#joystickListener)
    }

    #joyStickFound(e) {
        let joystick = this.#arcade.Joysticks[e.detail]
        
        // debug, this shows you the names of the buttons when they are pressed
        for (const buttonEvent of joystick.ButtonEvents) {
            document.addEventListener(buttonEvent, () => console.log(buttonEvent))
        }

        this.update();
    }

    //TODO: incoporate in library game loop, instead of an update with requestAnimationFrame
    update() {
        for (let joystick of this.#arcade.Joysticks) {
            joystick.update()
        }

        requestAnimationFrame(() => this.update());
    }

    disconnect() {
        document.removeEventListener("joystickcreated", this.#joystickListener)
    }
}

new Game()

 ```

<Br>
  
- [Arcade Game](https://github.com/HR-CMGT/arcade-game/)
- [Arcade kast](https://github.com/HR-CMGT/arcade-server/)

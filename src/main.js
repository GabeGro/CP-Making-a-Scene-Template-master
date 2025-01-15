// Code Practice: Making a Scene
// Name: Gabriel Groenwold
// Date: 1/13/24

"use strict"

let config = {
    type: Phaser.AUTO,
    scene: [ MainMenu, Play ],
}

let game = new Phaser.Game(config)
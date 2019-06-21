let config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 200}
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

let game = new Phaser.Game(config)

function preload() {
  this.load.image('sky', 'assets/sky.png')
}

function create() {
  this.add.image(300, 300, 'sky')
}

function update() {

}

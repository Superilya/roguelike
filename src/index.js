const World = require('world');

class Game {
    constructor() {
        this.world = new World();

        this.mainLoopTimer = null;
    }

    runWorld() {
        setTimeout(() => {
            console.log('\x1Bc');
            this.world.run();
            this.runWorld();
        }, 100);
    }

    start() {
        this.runWorld();
    }
}

const game = new Game();
game.start();

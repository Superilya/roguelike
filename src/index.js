const World = require('world');

class Game {
    constructor() {
        this.world = new World();

        this.mainLoopTimer = null;
    }

    runWorld() {
        setTimeout(async () => {
            console.log('\x1Bc');
            await this.world.run();
            this.runWorld();
        }, 130);
    }

    start() {
        this.runWorld();
    }
}

const game = new Game();
game.start();

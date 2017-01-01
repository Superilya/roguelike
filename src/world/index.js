const Prota = require('./prota');
const Mob = require('./mob');

const field = require('field');

const writer = require('writer');
const camera = require('camera');

class World {
    constructor() {
        this.prota = new Prota({ x: 4, y: 4 });
        this.mobs = [
            new Mob({ x: 7, y: 7 }),
        ];
    }

    run() {
        const cloneField = [...field].map(row => [...row]);
        this.prota.run();

        cloneField[this.prota.pos.y][this.prota.pos.x] = 3;

        this.mobs.forEach((mob) => {
            mob.run();
            cloneField[mob.pos.y][mob.pos.x] = 4;
        });

        writer(camera(this.prota.pos, cloneField));
    }
}

module.exports = new World();

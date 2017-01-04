const Prota = require('./prota');
const Mob = require('./mob');
const History = require('history');

const mainField = require('field');

const write = require('writer');
const camera = require('camera');

module.exports = class World {
    constructor() {
        this.history = new History();

        this.prota = new Prota({ x: 4, y: 4 }, this.history.protaAction);
        this.mobs = [
            new Mob({ x: 7, y: 7 }),
            new Mob({ x: 7, y: 7 }),
            new Mob({ x: 7, y: 7 }),
            new Mob({ x: 7, y: 7 }),
        ];
    }

    async run() {
        const cloneField = mainField.getClone();
        const field = mainField.get();

        const newField = await this.prota.run(field);

        this.mobs.forEach((mob) => {
            mob.run(field);
            cloneField[mob.pos.y][mob.pos.x] = 4;
        });

        cloneField[this.prota.pos.y][this.prota.pos.x] = 3;

        const { pos } = this.prota;

        write.toolbar(field[pos.y][pos.x]);
        write.field(camera(this.prota.pos, cloneField));
        mainField.set(newField);
    }
};

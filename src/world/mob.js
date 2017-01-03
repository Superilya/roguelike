const canMove = require('can-move');

const directions = [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
];

module.exports = class Mob {
    constructor({ x, y }) {
        this.pos = { x, y };
    }

    run(field) {
        const direction = directions[Math.round(Math.random() * 3)];
        const moveCell = {
            x: this.pos.x + direction.x,
            y: this.pos.y + direction.y,
        };

        if (canMove(moveCell, field)) {
            this.pos = moveCell;
        }
    }
};

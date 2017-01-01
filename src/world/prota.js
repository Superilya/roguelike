const keyGenerator = require('key');
const canMove = require('can-move');

module.exports = class Proto {
    constructor({ x, y }) {
        this.pos = { x, y };
    }

    getCellByKey() {
        const key = keyGenerator();
        const { x, y } = this.pos;

        switch (key) {
            case 's': return { x, y: y + 1 };
            case 'w': return { x, y: y - 1 };
            case 'a': return { y, x: x - 1 };
            case 'd': return { y, x: x + 1 };
            default: return { x, y };
        }
    }

    run() {
        const moveCell = this.getCellByKey();

        if (canMove(moveCell)) {
            this.pos = moveCell;
        }
    }
};

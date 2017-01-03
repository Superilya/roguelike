const keyGenerator = require('key');
const canMove = require('can-move');

const isAction = key => key === 'e';

// const logger = require('logger');

module.exports = class Proto {
    constructor({ x, y }, action) {
        this.pos = { x, y };
        this.inventory = {};

        this.action = action;
    }

    addToInventory(addInventory) {
        this.inventory = Object.keys(addInventory).reduce((inventory, thing) => {
            const thingCount = inventory[thing];
            const addThingCount = addInventory[thing];

            inventory[thing] = thingCount ? (thingCount + addThingCount) : addThingCount;

            return inventory;
        }, this.inventory);
    }

    getCellByKey(key) {
        const { x, y } = this.pos;

        switch (key) {
            case 's': return { x, y: y + 1 };
            case 'w': return { x, y: y - 1 };
            case 'a': return { y, x: x - 1 };
            case 'd': return { y, x: x + 1 };
            default: return null;
        }
    }

    run(field) {
        const key = keyGenerator();
        const moveCell = this.getCellByKey(key);

        // logger.info(`key - ${key}`);

        if (moveCell !== null && canMove(moveCell, field)) {
            this.pos = moveCell;
        } else if (isAction(key)) {
            const effects = this.action(this.pos, field);

            if (effects !== null) {
                const { inventory, field: newField } = effects;
                this.addToInventory(inventory);

                // logger.info(`inventory - ${JSON.stringify(this.inventory)}`);
                return newField;
            }
        }

        return field;
    }
};

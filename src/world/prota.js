const keyGenerator = require('key');
const canMove = require('can-move');
const viewInventory = require('view-inventory');
const viewPause = require('view-pause');

module.exports = class Proto {
    constructor({ x, y }, action) {
        this.pos = { x, y };
        this.inventory = { stone: 10 };

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

    move(moveCell, field) {
        if (moveCell !== null && canMove(moveCell, field)) {
            this.pos = moveCell;
        }
    }

    async run(field) {
        const key = keyGenerator();

        const { x, y } = this.pos;

        switch (key) {
            case 's': {
                this.move({ x, y: y + 1 }, field);
                return field;
            }
            case 'w': {
                this.move({ x, y: y - 1 }, field);
                return field;
            }
            case 'a': {
                this.move({ y, x: x - 1 }, field);
                return field;
            }
            case 'd': {
                this.move({ y, x: x + 1 }, field);
                return field;
            }
            case 'e': {
                const effects = await this.action(this.pos, field, this.inventory);

                if (effects !== null) {
                    const { inventory = {}, field: newField = field } = effects;
                    this.addToInventory(inventory);

                    return newField;
                }
                return field;
            }
            case 'f': {
                await viewInventory(this.inventory);
                return field;
            }
            case '\u001b': {
                await viewPause();
                return field;
            }
            default: return field;
        }
    }
};

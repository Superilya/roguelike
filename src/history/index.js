const Smith = require('./smith');

const pickUpStone = ({ x, y }, field) => {
    field[y][x] = 0;

    return {
        inventory: {
            stone: 1,
        },
        field,
    };
};

module.exports = class History {
    constructor() {
        this.smith = new Smith();

        this.protaAction = async (pos, field, inventory) => {
            const { x, y } = pos;
            const cell = field[y][x];

            switch (cell) {
                case 2: return pickUpStone(pos, field);
                case 5: return await this.smith.say(inventory);
                default: return null;
            }
        };
    }
};

const logger = require('logger');
const talk = require('talk');

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
        this.isSmithMission = false;

        this.protaAction = (pos, field) => {
            const { x, y } = pos;
            const cell = field[y][x];

            switch (cell) {
                case 2: return pickUpStone(pos, field);
                case 5: return this.sayWithSmith();
                default: return { inventory: {}, field };
            }
        };
    }

    sayWithSmith(_, field) {
        const talkResult = talk('Кузнец', {
            type: 'question',
            phrase: 'Привет, слушай у меня не хватает камней, найдёшь мне немного?',
            answers: [
                {
                    phrase: 'Да давай',
                    tail: {
                        type: 'phrase',
                        phrase: 'Ок давай мути жду',
                        tail: {
                            type: 'phrase',
                            phrase: 'Дос',
                        },
                    },
                },
                {
                    phrase: 'Нет, иди нах',
                },
            ],
        });

        if (talkResult[0] === 0) {
            logger.info('Заебись поговорили');
            this.isSmithMission = true;
        }

        return { inventory: {}, field };
    }
};

const talk = require('talk');

module.exports = class Smith {
    constructor() {
        this.dialogs = {
            giveMission: {
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
                                phrase: 'Досвидули',
                            },
                        },
                    },
                    {
                        phrase: 'Нет, не хочу',
                    },
                ],
            },
            readyToSend: {
                type: 'question',
                phrase: 'Ну чё принёс?',
                answers: [
                    {
                        phrase: 'Да, вот держи',
                    },
                    {
                        phrase: 'Нет, ещё не собрал',
                    },
                ],
            },
            missionСompleted: {
                type: 'phrase',
                phrase: 'Красавчик, вот тебе алмазик',
            },
            missionNotСompleted: {
                type: 'phrase',
                phrase: 'Ну иди тогда, чё пришёл',
            },
            fewStone: {
                type: 'phrase',
                phrase: 'Так у тебя не хватает камней, иди найди ещё',
            },
            success: {
                type: 'phrase',
                phrase: 'Рад тебя видеть, мне пока ничего не нужно',
            },
        };
        this.title = 'Кузнец';

        this.isSmithMission = false;
        this.success = false;
    }

    async say(inventory) {
        if (this.success) {
            await talk(this.title, this.dialogs.success);

            return null;
        }

        if (!this.isSmithMission) {
            const talkResult = await talk(this.title, this.dialogs.giveMission);

            if (talkResult[0] === 0) {
                this.isSmithMission = true;
            }

            return null;
        }

        const talkResult = await talk(this.title, this.dialogs.readyToSend);

        if (talkResult[0] === 0) {
            if (inventory.stone >= 10) {
                await talk(this.title, this.dialogs.missionСompleted);

                this.success = true;
                return {
                    inventory: {
                        stone: -10,
                        diamond: 1,
                    },
                };
            }

            await talk(this.title, this.dialogs.fewStone);
            return null;
        }

        await talk(this.title, this.dialogs.missionNotСompleted);
        return null;
    }
};

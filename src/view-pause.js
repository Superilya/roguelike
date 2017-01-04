const readSync = require('read-sync');

const action = (actionId) => {
    switch (actionId) {
        case 1: {
            process.exit();
            return;
        }
        default: return;
    }
};

module.exports = async () => {
    console.log('\x1Bc');
    const menu = ['Продолжить', 'Выйти'];
    const indices = menu.map((item, index) => {
        console.log(`[${index}] ${item}`);

        return index;
    });

    let answer;

    do {
        answer = Number(await readSync());
    } while (!indices.includes(answer));

    action(answer);

    console.log('\x1Bc');
};

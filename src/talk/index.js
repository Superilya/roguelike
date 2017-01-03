const readlineSync = require('readline-sync');

const talk = (title, frame) => {
    console.log('\x1Bc');

    switch (frame.type) {
        case 'phrase': {
            const { tail, phrase } = frame;

            console.log(`${title}: ${phrase}`);
            readlineSync.keyInPause('', {
                guide: false,
            });

            return tail ? [null, ...talk(title, tail)] : [null];
        }
        case 'question': {
            const { answers, phrase } = frame;

            const index = readlineSync.keyInSelect(
                answers.map(answer => answer.phrase),
                `${title}: ${phrase}`,
                { cancel: false }
            );

            const { tail } = answers[index];

            return tail ? [index, ...talk(title, tail)] : [index];
        }
        default: return [null];
    }
};

module.exports = (title, frame) => {
    const result = talk(title, frame);
    console.log('\x1Bc');

    const { stdin } = process; // todo делать свой readline-sync который не будет это проёбывать
    stdin.setRawMode(true);

    stdin.resume();

    return result;
};

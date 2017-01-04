const writeQuestion = require('./question');
const writePhrase = require('./phrase');

const talk = async (title, frame) => {
    switch (frame.type) {
        case 'phrase': {
            const { tail, phrase } = frame;

            await writePhrase(title, phrase);

            return tail ? [null, ...(await talk(title, tail))] : [null];
        }
        case 'question': {
            const { answers, phrase } = frame;

            const index = await writeQuestion(
                title,
                phrase,
                answers.map(answer => answer.phrase),
            );

            const { tail } = answers[index];

            return tail ? [index, ...(await talk(title, tail))] : [index];
        }
        default: return [null];
    }
};

module.exports = talk;

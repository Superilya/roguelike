const readSync = require('read-sync');

module.exports = async (title, phrase, answers) => {
    console.log('\x1Bc');
    console.log(`${title}: ${phrase}\n`);

    const indices = answers.map((answer, index) => {
        console.log(`[${index}] ${answer}`);
        return index;
    });

    let answer;

    do {
        answer = Number(await readSync());
    } while (!indices.includes(answer));

    console.log('\x1Bc');
    return answer;
};

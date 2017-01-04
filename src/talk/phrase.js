const readSync = require('read-sync');

module.exports = async (title, phrase) => {
    console.log('\x1Bc');
    console.log(`${title}: ${phrase}`);

    await readSync();
    console.log('\x1Bc');
};

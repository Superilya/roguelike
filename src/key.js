const { stdin } = process;

let gkey = null;

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
    gkey = key;
});

module.exports = () => {
    const key = gkey;
    if (gkey !== null) {
        gkey = null;
    }

    return key;
};

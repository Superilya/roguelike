const { stdin } = process;

module.exports = () => new Promise((res) => {
    const listener = (key) => {
        stdin.removeListener('data', listener);

        res(key);
    };

    stdin.on('data', listener);
});

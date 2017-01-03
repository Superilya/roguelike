// const chalk = require('chalk');

module.exports = (number) => {
    switch (number) {
        case 0: return ' ';
        case 1: return '#';
        case 2: return '%';
        case 3: return '@';
        case 4: return 'v';
        case 5: return '$';
        default: return 'X';
    }
};

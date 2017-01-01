module.exports = (number) => {
    switch (number) {
        case 0: return ' ';
        case 1: return '#';
        case 2: return '%';
        case 3: return '@';
        default: return 'X';
    }
};

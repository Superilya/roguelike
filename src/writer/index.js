const mapper = require('./mapping');

module.exports = (viewField) => {
    viewField.forEach((row) => {
        console.log(...row.reduce((string, cell) => string + mapper(cell), ''));
    });
};

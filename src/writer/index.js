const mapper = require('./mapping');
const toolbar = require('./toolbar');

module.exports = {
    toolbar,

    field: (viewField) => {
        viewField.forEach((row) => {
            row.forEach(cell => process.stdout.write(mapper(cell)));
            process.stdout.write('\n');
        });
    },
};

const startField = require('start-field');

class Field {
    constructor(field) {
        this.field = field;

        this.getClone = () => [...this.field].map(row => [...row]);
        this.set = () => { this.field = field; };
        this.get = () => this.field;
    }
}

module.exports = new Field(startField);

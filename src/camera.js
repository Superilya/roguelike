const viewport = require('viewport');
const logger = require('logger');

const getCurrent = (number, left, right) => {
    if (number < left) return left;
    if (number > right) return right;
    return number;
};

module.exports = ({ x, y }, field) => {
    const fieldWidth = field[0].length;
    const fieldHeight = field.length;

    if (x < 0 || y < 0 || y > fieldHeight || x > fieldWidth) {
        logger.info(`Ошибка камеры x - ${x}, y - ${y}`);
        return null;
    }

    const halfWidth = Math.floor(viewport.width / 2);
    const halfHeight = Math.floor(viewport.height / 2);

    const left = getCurrent(x - halfWidth, 0, fieldWidth - viewport.width);
    const top = getCurrent(y - halfHeight, 0, fieldHeight - viewport.height);

    return field.slice(top, top + viewport.height).map(
        row => row.slice(left, left + viewport.width)
    );
};

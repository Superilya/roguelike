module.exports = ({ x, y }, field) => {
    const row = field[y];

    if (!row) return false;

    const cell = row[x];

    return cell !== undefined && cell !== 1;
};

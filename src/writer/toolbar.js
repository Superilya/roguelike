const toolbarMapping = [
    'Ничего',
    'Гора',
    'Камень, можно взять',
    'Игрок',
    'Какая то хуйня',
    'Кузнец, можно поговорить',
];

module.exports = (cell) => {
    console.log(toolbarMapping[cell] || 'Хз что это');
};

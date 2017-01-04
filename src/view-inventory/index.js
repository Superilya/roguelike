const readSync = require('read-sync');

const inventoryNames = {
    stone: 'Камень',
    diamond: 'Алмаз',
};

module.exports = async (inventory) => {
    console.log('\x1Bc');

    Object.keys(inventory).forEach(
        thingName => console.log(
            `${inventoryNames[thingName] || thingName}: ${inventory[thingName]}`
        )
    );

    await readSync();
    console.log('\x1Bc');
};

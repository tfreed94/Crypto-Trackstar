const sequelize = require('../config/connection');
const { User, Coins } = require('../models');
const userData = require('./user-seeds.json');
const coinsData = require('./coinData.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const coins of coinsData) {
        await Coins.create({
            ...coins,
        });
    }

    process.exit(0);
};

seedDatabase();
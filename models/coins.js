const User = require('./User');
const Coins = require('./Coins');
const Watchlist = require('./Watchlist');

Watchlist.hasMany(Coins, {
  foreignKey: 'Coins_id',
});

Watchlist.belongsTo(User, {
  foreignKey: 'User_id',
});

module.exports = { User, Coins, Watchlist };

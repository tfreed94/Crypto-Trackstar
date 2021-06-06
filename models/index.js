const User = require('./user');
const Coins = require('./coins');
User.hasMany(Coins, {
  foreignKey: 'coins_id',
});
Coins.belongsTo(User, {
  foreignKey: 'user_id',
});
module.exports = { User, Coins, };
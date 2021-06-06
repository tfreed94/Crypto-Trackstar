const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Coins extends Model {}
Coins.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'coins',
}
)
module.exports= Coins
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create locationSport model
class locationSport extends Model {}

// create fields/columns for locationSport model
locationSport.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        locationId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sportId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'locationSport'
    }
);

module.exports = 'locationSport';
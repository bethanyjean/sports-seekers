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
        sportsId: {
            type: DataTypes.STRING,
            references: {
                model: 'sports',
                key: 'id'
            }
        },
        locationId: {
            type: DataTypes.STRING,
            references: {
                model: 'location',
                key: 'id'
            }
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
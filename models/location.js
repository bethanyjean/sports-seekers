const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create location model
class location extends Model {}

// create fields/columns for location model
location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hours: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'location'
    }
);

module.exports = location;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create sports model
class sports extends Model {}

// create fields/columns for sports model
sports.init(
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
        requiredParticipants: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        equipmentNeeded: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'sports'

    }    
);

module.exports = sports;
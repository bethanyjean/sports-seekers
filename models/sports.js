const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create sports model
class sports extends Model {}

// create fields/columns for sports model
sports.init(
    {
        sport: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
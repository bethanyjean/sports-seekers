const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create scheduledEvents model
class scheduledEvents extends Model { }

// create fields/columns for scheduledEvents model
scheduledEvents.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id'
            }
        },
        sports_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'sports',
                key: 'id'
            },
        },
        date: {
           type: DataTypes.DATE,
            allowNull: false
            
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'scheduledEvents'
    }
);

module.exports = scheduledEvents;



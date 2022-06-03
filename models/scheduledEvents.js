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
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        locationId: {
            type: DataTypes.STRING,
            references: {
                model: 'location',
                key: 'id'
            }
        },
        sportsId: {
            type: DataTypes.STRING,
            references: {
                model: 'sports',
                key: 'id'
            },
            date: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'scheduledEvents'
    }
);

module.exports = scheduledEvents;



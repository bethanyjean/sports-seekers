const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create scheduledParticipants model
class scheduledParticipants extends Model { }

// create fields/columns for scheduledParticipants model
scheduledParticipants.init(
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
            },
            scheduledEvents_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'scheduledEvents',
                    key: 'id'
                }
            },

        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'scheduledParticipants'
    }
);

module.exports = scheduledParticipants;
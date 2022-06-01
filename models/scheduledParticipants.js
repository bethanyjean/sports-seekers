const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create scheduledParticipants model
class scheduledParticipants extends Model {}

// create fields/columns for scheduledParticipants model
scheduledParticipants.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
            eventId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            }
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
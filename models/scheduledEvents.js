const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create scheduledEvents model
class scheduledEvents extends Model {}

// create fields/columns for scheduledEvents model
scheduledEvents.init(
    {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },  
      date: {
          type: DataTypes.STRING,
          allowNull: false
      },
      locationId: {
          type: DataTypes.STRING,
          allowNull: false
      },
      sportId: {
          type: DataTypes.STRING,
          allowNull: false
      },
      coordinatorId: {
          type: DataTypes.STRING,
          allowNull: false
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


// do we need a column for "hasEnoughParticipants"? --looking at the Project 2 Data spreadsheet
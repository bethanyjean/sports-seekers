const { sports } = require('../models');

const sportsdata = [
  {
    name: 'Soccer',
    requiredParticipants: 22,
    description: 'Futbol is life',
    equipmentNeeded: 'Shin guards'
  },
  {
    name: 'Football',
    requiredParticipants: 24,
    description: 'This sport should not be called football',
    equipmentNeeded: 'Helmet'
  },
  {
    name: 'Softball',
    requiredParticipants: 20,
    description: 'Throw the ball and then other gal needs to hit it',
    equipmentNeeded: 'Bat, gloves'
  },
  {
    name: 'Basketball',
    requiredParticipants: 10,
    description: 'Put the ball in the hoop',
    equipmentNeeded: 'N/A'
  },
];

const seedSports = () => sports.bulkCreate(sportsdata);

module.exports = seedSports;
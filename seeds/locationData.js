const { location } = require('../models');

const locationdata = [
  {
    name: 'International Indoor Soccer Arena',
    address: '222 Main Ave',
    hours: '8-8',
  },
  {
    name: 'Cibola High School Track',
    address: '333 Elms Street',
    hours: '9-6'
  }
];

const seedLocation = () => location.bulkCreate(locationdata);

module.exports = seedLocation;

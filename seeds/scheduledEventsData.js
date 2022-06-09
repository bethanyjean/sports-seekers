const { scheduledEvents } = require('../models');

const scheduledEventsdata = [
  {
    user_id: 1,
    location_id: 1, 
    sports_id: 1
  },
  {
    user_id: 1,
    location_id: 1, 
    sports_id: 2
  },
  {
    user_id: 1,
    location_id: 2, 
    sports_id: 3
  },
  {
    user_id: 1,
    location_id: 2, 
    sports_id: 4
  }
];

const seedScheduledEvents = () => scheduledEvents.bulkCreate(scheduledEventsdata);

module.exports = seedScheduledEvents;
const { scheduledEvents } = require('../models');

const scheduledEventsdata = [
  {
    user_id: 1,
    location_id: 1, 
    sports_id: 1,
    date: 01/05/2022
  },
  {
    user_id: 1,
    location_id: 1, 
    sports_id: 2,
    date: 01/05/2022
  },
  {
    user_id: 1,
    location_id: 2, 
    sports_id: 3,
    date: 01/05/2022
  },
  {
    user_id: 1,
    location_id: 2, 
    sports_id: 4,
    date: 01/05/2022
  }
];

const seedScheduledEvents = () => scheduledEvents.bulkCreate(scheduledEventsdata);

module.exports = seedScheduledEvents;
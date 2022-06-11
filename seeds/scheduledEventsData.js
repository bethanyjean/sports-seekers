const { scheduledEvents } = require('../models');

const scheduledEventsdata = [
  {
    location_id: 1, 
    sports_id: 1,
    date: 06/07/2022
  },
  {
    location_id: 1, 
    sports_id: 2,
    date: 07/04/2022
  },
  {
    location_id: 2, 
    sports_id: 3,
    date: 06/30/2022
  },
  {
    location_id: 2, 
    sports_id: 4,
    date: 07/01/2022
  }
];

const seedScheduledEvents = () => scheduledEvents.bulkCreate(scheduledEventsdata);

module.exports = seedScheduledEvents;
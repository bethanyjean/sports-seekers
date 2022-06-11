const { scheduledEvents } = require('../models');

const scheduledEventsdata = [
  {
    location_id: 1, 
    sports_id: 1,
<<<<<<< HEAD
    date: 01/05/2022
=======
    date: 06/07/2022
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
  },
  {
    location_id: 1, 
    sports_id: 2,
<<<<<<< HEAD
    date: 01/05/2022
=======
    date: 07/04/2022
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
  },
  {
    location_id: 2, 
    sports_id: 3,
<<<<<<< HEAD
    date: 01/05/2022
=======
    date: 06/30/2022
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
  },
  {
    location_id: 2, 
    sports_id: 4,
<<<<<<< HEAD
    date: 01/05/2022
=======
    date: 07/01/2022
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
  }
];

const seedScheduledEvents = () => scheduledEvents.bulkCreate(scheduledEventsdata);

module.exports = seedScheduledEvents;
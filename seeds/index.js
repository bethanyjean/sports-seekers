const sequelize = require('../config/connection');
const seedLocation = require('./locationData');
const seedSports = require('./sportsData');
const seedScheduledEvents = require('./scheduledEventsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLocation();

  await seedSports();

  await seedScheduledEvents();

  process.exit(0);
};

seedAll();

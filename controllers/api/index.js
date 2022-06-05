const router = require('express').Router();

const locationRoutes = require('./location-routes');
//const locationsportsRoutes = require('./locationsports-routes');
const scheduledEventsRoutes = require('./scheduledEvents-routes');
const scheduledParticipantsRoutes = require('./scheduledParticipants-routes');
const sportsRoutes = require('./sports-routes');
const userRoutes = require('./user-routes');

router.use('/location', locationRoutes);
// router.use('/locationSport', locationsportsRoutes);
router.use('/scheduledEvents', scheduledEventsRoutes);
router.use('/scheduledParticipants', scheduledParticipantsRoutes);
router.use('/sports', sportsRoutes);
router.use('/user', userRoutes);


module.exports = router;
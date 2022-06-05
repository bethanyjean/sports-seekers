const router = require('express').Router();

const locationRoutes = require('./location-routes');
//const locationsportsRoutes = require('./locationsports-routes');
const scheduledeventsRoutes = require('./scheduledEvents-routes');
// const scheduledparticipantsRoutes = require('./scheduledPaticipants-routes');
const sportsRoutes = require('./sports-routes');
const userRoutes = require('./user-routes');

router.use('/location', locationRoutes);
// router.use('/locationSport', locationsportsRoutes);
router.use('/scheduledEvents', scheduledeventsRoutes);
// router.use('/scheduledParticipants', scheduledPaticipantsRoutes);
router.use('/sports', sportsRoutes);
router.use('/user', userRoutes);


module.exports = router;
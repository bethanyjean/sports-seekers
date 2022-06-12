const router = require('express').Router();
// const sequelize = require('../config/connection');
const { scheduledEvents, sports, location, scheduledParticipants } = require('../models');


router.get('/', async (req, res) => {
  try {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/basketball', async (req, res) => {
  try {
    const events = await scheduledEvents.findAll({
      where: {sports_id: 5},
      attributes: [
        'id',
        'date'
      ],
      include: [
        {
          model: sports,
          attributes: ['name']
        },
        {
          model: location,
          attributes: ['name'],
        }, 
        {
          model: scheduledParticipants,
          attributes: ['user_id']
        }
      ],
    });
  var eventsArray = events.map((event1) => event1.get({plain:true}))
  console.log(eventsArray);
  res.render('sports', {
    loggedIn: req.session.loggedIn,
    sport_events: eventsArray
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/football', async (req, res) => {
  try {
    const events = await scheduledEvents.findAll({
      where: {sports_id: 2},
      attributes: [
        'id',
        'date'
      ],
      include: [
        {
          model: sports,
          attributes: ['name']
        },
        {
          model: location,
          attributes: ['name'],
        }, 
        {
          model: scheduledParticipants,
          attributes: ['user_id']
        }
      ],
    });
  var eventsArray = events.map((event1) => event1.get({plain:true}))
  console.log(eventsArray);
  res.render('sports', {
    loggedIn: req.session.loggedIn,
    sport_events: eventsArray
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/soccer', async (req, res) => {
  try {
    const events = await scheduledEvents.findAll({
      where: {sports_id: 1},
      attributes: [
        'id',
        'date'
      ],
      include: [
        {
          model: sports,
          attributes: ['name']
        },
        {
          model: location,
          attributes: ['name'],
        }, 
        {
          model: scheduledParticipants,
          attributes: ['user_id']
        }
      ],
    });
  var eventsArray = events.map((event1) => event1.get({plain:true}))
  console.log(eventsArray);
  res.render('sports', {
    loggedIn: req.session.loggedIn,
    sport_events: eventsArray
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});


router.get('/softball', async (req, res) => {
  try {
    const events = await scheduledEvents.findAll({
      where: {sports_id: 3},
      attributes: [
        'id',
        'date'
      ],
      include: [
        {
          model: sports,
          attributes: ['name']
        },
        {
          model: location,
          attributes: ['name'] 
        }, 
        {
          model: scheduledParticipants,
          attributes: ['user_id']
        }
      ],
    });
  var eventsArray = events.map((event1) => event1.get({plain:true}))
  console.log(eventsArray);
  res.render('sports', {
    loggedIn: req.session.loggedIn,
    sport_events: eventsArray
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout',(req, res) =>{
  res.render('homepage');
});

module.exports = router;


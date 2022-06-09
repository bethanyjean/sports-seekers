const router = require('express').Router();
// const sequelize = require('../config/connection');
const { scheduledEvents, sports } = require('../models');


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
      include: [
        {
          model: sports,
          where: {name: "Basketball"},
          attributes: ['name'],
        },
      ],
    });
  
  res.render('basketball', {
    loggedIn: req.session.loggedIn,
    sport_events: events
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/football', async (req, res) => {
  try {
    const events = await scheduledEvents.findAll({
      include: [
        {
          model: sports,
          where: {name: "Football"},
          attributes: ['name'],
        },
      ],
    });
  
  res.render('football', {
    loggedIn: req.session.loggedIn,
    sport_events: events
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/soccer', async (req, res) => {
  try {
    const events = await scheduledEvents.findAll({
      include: [
        {
          model: sports,
          where: {name: "Soccer"},
          attributes: ['name'],
        },
      ],
    });
  
  res.render('soccer', {
    loggedIn: req.session.loggedIn,
    sport_events: events
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});


router.get('/softball', async (req, res) => {
  try {
    const events = await scheduledEvents.findAll({
      include: [
        {
          model: sports,
          where: {name: "Softball"},
          attributes: ['name'],
        },
      ],
    });
    
  res.render('softball', {
    loggedIn: req.session.loggedIn,
    sport_events: events
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
    res.render('login');
  // }
});



module.exports = router;
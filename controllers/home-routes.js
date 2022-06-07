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
          attributes: ['name'],
        },
      ],
    });
  
    // TODO Filter based on sport type 
  
  res.render('basketball', {
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
          attributes: ['name'],
        },
      ],
    });
  
    // TODO Filter based on sport type 
  
  res.render('football', {
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
          attributes: ['name'],
        },
      ],
    });
  
    // TODO Filter based on sport type 
  
  res.render('soccer', {
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
          attributes: ['name'],
        },
      ],
    });
  
    // TODO Filter based on sport type 
  
  res.render('softball', {
    sport_events: events
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.render('login');
  }
});



module.exports = router;
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
    const events1 = await scheduledEvents.findAll({
      include: [
        {
          model: sports,
          where: {name: "Basketball"},
          attributes: ['name'],
        },
      ],
    });
  // console.log("fomr /basketball FE api: " + events1)
  // .get({plain: true})
  // map
  const basketballEvent = events1.map(basketballEvent => basketballEvent.get({plain: true}) )
  console.log("=====================")
  console.log(basketballEvent);

  res.render('basketball', {
    loggedIn: req.session.loggedIn,
    sport_events: basketballEvent
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/football', async (req, res) => {
  try {
    const events1 = await scheduledEvents.findAll({
      include: [
        {
          model: sports,
          where: {name: "Football"},
          attributes: ['name'],
        },
      ],
    });
    console.log("fomr /football FE api: " + events1)
  
  res.render('football', {
    loggedIn: req.session.loggedIn,
    sport_events: events1
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/soccer', async (req, res) => {
  try {
    const events1 = await scheduledEvents.findAll({
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
    sport_events: events1
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});


router.get('/softball', async (req, res) => {
  try {
    const events1 = await scheduledEvents.findAll({
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
    sport_events: events1
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
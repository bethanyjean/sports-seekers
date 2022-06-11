const router = require('express').Router();
// const sequelize = require('../config/connection');
const { scheduledEvents, sports, location } = require('../models');


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
<<<<<<< HEAD
    const events1 = await scheduledEvents.findAll({
=======
    const events = await scheduledEvents.findAll({
      where: {sports_id: 5},
      attributes: [
        'date'
      ],
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
      include: [
        {
          model: sports,
          attributes: ['name']
        },
        {
          model: location,
          attributes: ['name'],
        },
      ],
    });
<<<<<<< HEAD
  // console.log("fomr /basketball FE api: " + events1)
  // .get({plain: true})
  // map
  const basketballEvent = events1.map(basketballEvent => basketballEvent.get({plain: true}) )
  console.log("=====================")
  console.log(basketballEvent);

  res.render('basketball', {
    loggedIn: req.session.loggedIn,
    sport_events: basketballEvent
=======
  var eventsArray = events.map((event1) => event1.get({plain:true}))
  console.log(eventsArray);
  res.render('sports', {
    // loggedIn: req.session.loggedIn,
    sport_events: eventsArray
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/football', async (req, res) => {
  try {
<<<<<<< HEAD
    const events1 = await scheduledEvents.findAll({
=======
    const events = await scheduledEvents.findAll({
      where: {sports_id: 2},
      attributes: [
        'date'
      ],
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
      include: [
        {
          model: sports,
          attributes: ['name']
        },
        {
          model: location,
          attributes: ['name'],
        },
      ],
    });
<<<<<<< HEAD
    console.log("fomr /football FE api: " + events1)
  
  res.render('football', {
    loggedIn: req.session.loggedIn,
    sport_events: events1
=======
  var eventsArray = events.map((event1) => event1.get({plain:true}))
  console.log(eventsArray);
  res.render('sports', {
    // loggedIn: req.session.loggedIn,
    sport_events: eventsArray
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/soccer', async (req, res) => {
  try {
<<<<<<< HEAD
    const events1 = await scheduledEvents.findAll({
=======
    const events = await scheduledEvents.findAll({
      where: {sports_id: 1},
      attributes: [
        'date'
      ],
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
      include: [
        {
          model: sports,
          attributes: ['name']
        },
        {
          model: location,
          attributes: ['name'],
        },
      ],
    });
<<<<<<< HEAD
  
  res.render('soccer', {
    loggedIn: req.session.loggedIn,
    sport_events: events1
=======
  var eventsArray = events.map((event1) => event1.get({plain:true}))
  console.log(eventsArray);
  res.render('sports', {
    // loggedIn: req.session.loggedIn,
    sport_events: eventsArray
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});


router.get('/softball', async (req, res) => {
  try {
<<<<<<< HEAD
    const events1 = await scheduledEvents.findAll({
=======
    const events = await scheduledEvents.findAll({
      where: {sports_id: 3},
      attributes: [
        'date'
      ],
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
      include: [
        {
          model: sports,
          attributes: ['name']
        },
        {
          model: location,
          attributes: ['name'] 
        },
      ],
    });
<<<<<<< HEAD
    
  res.render('softball', {
    loggedIn: req.session.loggedIn,
    sport_events: events1
=======
  var eventsArray = events.map((event1) => event1.get({plain:true}))
  console.log(eventsArray);
  res.render('sports', {
    // loggedIn: req.session.loggedIn,
    sport_events: eventsArray
>>>>>>> ce7fddf36d6108d2407c75cf5a34eac8a1272278
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
router.get('/logout',(req, res) =>{
  res.render('homepage');
});


module.exports = router;


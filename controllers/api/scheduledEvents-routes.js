const router = require('express').Router();
const { scheduledEvents, sports, location, user, scheduledParticipants } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

// This route allows searchs for events

//Retrieves the events 
router.get('/', (req, res) => {
    scheduledEvents.findAll({
        attributes: [
            'id',
            'date',
            // 'time',
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
        //     {
        //         model: user,
        //         attributes: ['username'],
        //         as: "coordinator"
        //     }
          ] 
    })
    .then(dbscheduledEventsdata => res.json(dbscheduledEventsdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Retrieves all events based on sportsid
router.get('/location/:location_id', (req, res) => {
  scheduledEvents.findAll({
    where: {
      location_id: req.params.location_id
    },
    attributes: [
      'id',
      'date',
      // 'time',
    ],
    include: [
      {
        model: sports,
        attributes: ['name']
      },
      {
        model: location,
        attributes: ['name']
      }
      // {
      //     model: user,
      //     attributes: ['username'],
      //     as: "coordinator"
      // },
    ] 
})
.then(dbscheduledEventsdata => {
    if (!dbscheduledEventsdata) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbscheduledEventsdata);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Retrieves one event by sports id
router.get('/sports/:sports_id', (req, res) => {
  scheduledEvents.findAll({
    where: {
      sports_id: req.params.sports_id
    },
    attributes: [
      'id',
      'date',
      // 'time',
    ],
    include: [
      {
        model: sports,
        attributes: ['name']
      },
      {
        model: location,
        attributes: ['name']
      }
      // {
      //     model: user,
      //     attributes: ['username'],
      //     as: "coordinator"
      // },
    ] 
})
.then(dbscheduledEventsdata => {
    if (!dbscheduledEventsdata) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbscheduledEventsdata);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Retrieves one event
router.get('/:id', (req, res) => {
    scheduledEvents.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'date',
        // 'time',
      ],
      include: [
        {
          model: sports,
          attributes: ['name']
        },
        {
          model: location,
          attributes: ['name']
        }
        // {
        //     model: user,
        //     attributes: ['username'],
        //     as: "coordinator"
        // },
      ] 
})
.then(dbscheduledEventsdata => {
      if (!dbscheduledEventsdata) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbscheduledEventsdata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Creates events
router.post('/', (req, res) => {
  console.log(req.body.sports_id)  
  scheduledEvents.create({

      location_id: req.body.location_id,
      sports_id: req.body.sports_id,
      date: req.body.date,
    //   time: req.body.time
    })
      .then(dbscheduledEventsdata => res.json(dbscheduledEventsdata))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  //Deletes event 
  router.delete('/:id', withAuth, (req, res) => {
    scheduledEvents.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbscheduledEventsdata => {
        if (!dbscheduledEventsdata) {
          res.status(404).json({ message: 'No record found with this id!' });
          return;
        }
        res.json(dbscheduledEventsdata);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;
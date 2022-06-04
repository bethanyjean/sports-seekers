const router = require('express').Router();
const { scheduledEvents, sports, location, user } = require('../../models');
const withAuth = require('../../utils/auth');

// This route allows searchs for events

//Retrieves the events 
router.get('/', (req, res) => {
    scheduledEvents.findAll({
        attributes: [
            'id',
            'date',
            'time',
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
          ] 
    })
    .then(dbscheduledEventsdata => res.json(dbscheduledEventsdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//Creates events
router.post('/', (req, res) => {
    scheduledEvents.create({
      uder_id: req.body.name,
      location_id: req.body.location_id,
      sports_id: req.body.sports_id
    })
      .then(dbscheduledEventsdata => res.json(dbscheduledEventsdata))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  //Deletes event 
  router.delete('/:id', withAuth, (req, res) => {
    dbscheduledEventsdata.destroy({
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
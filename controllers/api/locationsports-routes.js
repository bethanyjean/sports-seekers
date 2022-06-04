const router = require('express').Router();
const { location, locationSport, sports } = require('../../models');
const withAuth = require('../../utils/auth');

// This route allows searchs for locations with the name, location, address, and their business hours 

//Retrieves the locations 
router.get('/', (req, res) => {
    locationSport.findAll()
    .then(dblocationSportdata => res.json(dblocationSportdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//Creates locationSports for the Richmond area 
router.post('/', (req, res) => {
    locationSport.create({
      name: req.body.name,
      address: req.body.address,
      hours: req.body.hours
    })
      .then(dblocationSportdata => res.json(dblocationSportdata))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  //Deletes locationSport 
  router.delete('/:id', (req, res) => {
    locationSport.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dblocationSportdata => {
        if (!dblocationSportdata) {
          res.status(404).json({ message: 'No location found with this id!' });
          return;
        }
        res.json(dblocationSportdata);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;
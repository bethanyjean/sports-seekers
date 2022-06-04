const router = require('express').Router();
const { location } = require('../../models');
const withAuth = require('../../utils/auth');

// This route allows searchs for locations with the name, location, address, and their business hours 

//Retrieves the locations 
router.get('/', (req, res) => {
    location.findAll()
    .then(dblocationdata => res.json(dblocationdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//Creates locations for the Richmond area 
router.post('/', withAuth, (req, res) => {
    location.create({
      id: req.body.id,
      name: req.session.name,
      address: req.body.address,
      hours: req.body.hours
    })
      .then(dblocationdata => res.json(dblocationdata))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  //Deletes location 
  router.delete('/:id', withAuth, (req, res) => {
    location.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dblocationdata => {
        if (!dblocationdata) {
          res.status(404).json({ message: 'No location found with this id!' });
          return;
        }
        res.json(dblocationdata);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;
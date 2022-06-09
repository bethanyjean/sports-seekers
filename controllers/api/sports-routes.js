const router = require('express').Router();
const { sports } = require('../../models');


// This route allows searches for sport, minimum people required, a description, and equipment needed

// Retrieves the sports
router.get('/', (req, res) => {
    sports.findAll()
    .then(dbsportsdata => res.json(dbsportsdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// Creates specific sport 
router.post('/', (req, res) => {
    sports.create({
        name: req.body.name,
        requiredParticipants: req.body.requiredParticipants,
        description: req.body.description,
        equipmentNeeded: req.body.equipmentNeeded
    })
        .then(dbsportsdata => res.json(dbsportsdata))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});


module.exports = router;
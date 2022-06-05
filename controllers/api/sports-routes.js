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
//Deletes sports 
// router.delete('/.id',  (req, res) => {
//   sports.destroy({
//     sport: req.body.sports,
//     minimumPeopleRequired: req.body.minimumPeopleRequired,
//     descriptioin: req.body.description,
//      equipmentNeeded: req.body.equipmentNeeded
//   })
//     .then(dbsportsdata => {
//       if (!dbsportsdata) {
//         res.status(404).json({ message: 'No sport found with this id!' });
//         return;
//       }
//       res.json(dbsportsdata);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// router.put('/update', (req, res) => {
//   sports.update({
//      where: {    
//     sport: req.body.sports,
//     minimumPeopleRequired: req.body.minimumPeopleRequired,
//     descriptioin: req.body.description,
//      equipmentNeeded: req.body.equipmentNeeded
//     }
//   })
//     .then(dbsportsdata => {
//       if (!dbsportsdata) {
//         res.status(404).json({ message: "No sports update with this information" });
//         return;
//       }
//       res.json(dbsportsdata);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
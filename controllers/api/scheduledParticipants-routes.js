const router = require('express').Router();
const { scheduledEvents, user, scheduledParticipants } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

// This route allows searchs for events


router.get('/', (req, res) => {
    scheduledParticipants.findAll({
        attributes: [
            'id',
            'user_id',
            'scheduledEvents_id'
          ],
    })
    .then(dbscheduledParticipantsdata => res.json(dbscheduledParticipantsdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// //Retrieves one event
// router.get('/:id', (req, res) => {
//     Post.findOne({
//       where: {
//         user_id: req.params.id
//       },
//       include: [
//         {
//           model: sports,
//           attributes: ['name']
//         },
//         {
//           model: location,
//           attributes: ['name']
//         },
//         {
//             model:scheduledEvents,
//             attributes: ['date'],
//         },
//       ] 
// })
// .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

//Creates events
router.post('/', (req, res) => {
    scheduledParticipants.create({
      user_id: req.body.user_id,
      scheduledEvents_id: req.body.scheduledEvents_id,
    })
      .then(dbscheduledParticipantsdata => res.json(dbscheduledParticipantsdata))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

//   //Deletes user 
//   router.delete('/:id', withAuth, (req, res) => {
//     dbscheduledParticipantssdata.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(dbscheduledParticipantssdata => {
//         if (!dbscheduledEventsdata) {
//           res.status(404).json({ message: 'No record found with this id!' });
//           return;
//         }
//         res.json(dbscheduledParticipantssdata);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });


module.exports = router;
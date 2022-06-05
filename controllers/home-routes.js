const router = require('express').Router();
const sequelize = require('../config/connection');
// const { Gallery, Painting } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    // const dbGalleryData = await Gallery.findAll({
    //   include: [
    //     {
    //       model: Painting,
    //       attributes: ['filename', 'description'],
    //     },
    //   ],
    // });

//     const galleries = dbGalleryData.map((gallery) =>
//     gallery.get({ plain: true })
//   );
  // Send over the 'loggedIn' session variable to the 'homepage' template
  res.render('homepage', {
    // galleries,
    // loggedIn: req.session.loggedIn,
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
  if (req.session. loggedIn) {
  res.render('login');
  }
});



module.exports = router;
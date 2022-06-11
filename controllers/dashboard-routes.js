 const router = require('express').Router();
const sequelize = require('../config/connection');
// // const { Post, User, Comment, Vote } = require('../models');
// // const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('dashboard')
   });

module.exports = router;
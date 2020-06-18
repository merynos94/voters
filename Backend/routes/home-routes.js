const express = require('express');
const controller = require('../controllers/home-controller');
const router = express.Router();

router.get('/results', controller.getResults);
// router.get('/votes', controller.getVotes);

module.exports = router;

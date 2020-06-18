const express = require('express');
const { check } = require('express-validator');

const candidatesControllers = require('../controllers/candidates-controllers');

const router = express.Router();

router.get('/:cid', candidatesControllers.getCandidateById);

router.post(
    '/',
    [
      check('firstName')
        .not()
        .isEmpty(),
      check('lastName').isLength({ min: 5 }),
      check('candidateId')
        .not()
        .isEmpty()

    ],
    candidatesControllers.createdCandidate
  );
module.exports = router;

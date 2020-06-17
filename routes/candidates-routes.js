const express = require('express');
const { check } = require('express-validator');

const candidatesControllers = require('../controllers/candidates-controllers');

const router = express.Router();

router.get('/:cid', candidatesControllers.getCandidateById);

router.get('/user/:uid', candidatesControllers.getCandidatesByUserId);

router.post(
  '/',
  [
    check('firstName')
      .not()
      .isEmpty(),
    check('lastName')
      .not()
      .isEmpty(),
    check('candidateId')
      .not()
      .isEmpty()
  ],
  candidatesControllers.createdCandidate
);

// router.patch(
//   '/:pid',
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('description').isLength({ min: 5 })
//   ],
//   placesControllers.updatePlace
// );

// router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;

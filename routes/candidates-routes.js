const express = require('express');
const { check } = require('express-validator');

const candidatesControllers = require('../controllers/candidates-controllers');

const router = express.Router();

router.get('/:cid', candidatesControllers.getCandidateById);

<<<<<<< HEAD
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
=======
router.get('/user/:uid', candidatesControllers.getCandidatesByUserId); // ----- to nie jest potrzebne

router.post(  // ----- po co ta ściezka?
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

// ----- brakuje sciezki do wysylania formularza na serwer (chyba, że chcesz to zrobić domyślnym submitem formularza, wtedy nie trzeba)


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

>>>>>>> 3654a16f79f12f1d999d8f3d46575512979e5142
module.exports = router;

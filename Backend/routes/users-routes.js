/**
 * @const {Object} router - class to create modular, mountable route handlers. 
 * @property {string} getUsers - getUsers from server
 * @property {string} login - login users.
 */

const express = require('express');
const { check } = require('express-validator');
const usersController = require('../controllers/users-controllers');
const router = express.Router();

router.get('/', usersController.getUsers);

router.post(
  '/signup',
  [
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 3 })
  ],
  usersController.signup
);
router.post('/login', usersController.login);

module.exports = router;
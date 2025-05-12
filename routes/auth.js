const express = require('express');
const { check, body } = require('express-validator');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email address.')
      .normalizeEmail(),
    body('password', 'Password has to be valid.')
      .isLength({ min: 6 })
      .isAlphanumeric()
      .trim()
  ],
  authController.postLogin
);


router.post(
    '/signup',
    [
        check('email').
            isEmail().
            withMessage('please enter a valid email').
            custom((value, { req }) => {
                // if(value === 'something') {
                //     throw new Error('this email is not acceptable');
                // }
                // return true;
                return User.findOne({email: value})
                .then(userDoc => {
                    if(userDoc) {
                        return Promise.reject('E-Mail exists already, please pick a different one.');
                    }
                })
            })
            .normalizeEmail(),
        body(
          'password',
          'please enter a password of only numbers and text and contains at least 6 charachters.'
        )
          .isLength({min: 6})
          .isAlphanumeric()
          .trim(),
        body('confirmPassword')
        .trim()
            .custom((value, { req }) => {
                if (value !== req.body.password){
                    throw new Error('Passwords must match!');
                }
                return true;
            })
    ],
    authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;
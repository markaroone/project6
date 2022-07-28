const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/').get(userController.getAllUsers).post();

router.route('/:id').get(userController.getUser).put().patch().delete();

module.exports = router;

const express = require('express');
const router = express.Router();

const { get, post } = require('../controllers/loginController');

// router.get('/logout', logout);
router.get('/', get);
router.post('/', post);

module.exports = router;
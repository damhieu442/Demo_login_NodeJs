const express = require('express');
const router = express.Router();

const { get } = require('../controllers/logoutController');

router.get('/', get);

module.exports = router;
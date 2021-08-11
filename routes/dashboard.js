const express = require('express');
const router = express.Router();

const { get } = require('../controllers/dashboardController');

router.get('/', get);

module.exports = router;
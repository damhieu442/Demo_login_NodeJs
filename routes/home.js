const express = require('express');
const router = express.Router();

const { get } = require('../controllers/homeController');

router.get('/', get);

module.exports = router;

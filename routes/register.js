const express = require('express');
const router = express.Router();

const { get, post } = require('../controllers/registerCotroller');

router.post('/', post);
router.get('/', get);

module.exports = router;
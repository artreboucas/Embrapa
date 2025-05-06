// src/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const { getData, addData } = require('../controllers/dataController');

router.get('/', getData);
router.post('/', addData);

module.exports = router;

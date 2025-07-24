const express = require('express');
const router = express.Router();
const AniosController = require('../controllers/aniosController');

router.get('/', AniosController.getAllAnios);
router.post('/', AniosController.createAnio);

module.exports = router;
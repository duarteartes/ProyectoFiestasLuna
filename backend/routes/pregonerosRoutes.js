const express = require('express');
const router = express.Router();
const PregonerosController = require('../controllers/pregonerosController');

router.get('/', PregonerosController.getAllPregoneros);
router.get('/:fiesta_id', PregonerosController.getPregonerosPorFiesta);
router.post('/', PregonerosController.createPregonero);

module.exports = router;

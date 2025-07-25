const express = require('express');
const router = express.Router();
const SaludosController = require('../controllers/saludosController');

router.get('/', SaludosController.getAllSaludos);
router.get('/:fiesta_id', SaludosController.getSaludosPorFiesta);
router.get('/anio/:anio/tipo/:tipo', SaludosController.getSaludosPorAnioYTipo);
router.post('/', SaludosController.createSaludo);

module.exports = router;
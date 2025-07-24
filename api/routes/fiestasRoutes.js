const express = require('express');
const router = express.Router();
const FiestasController = require('../controllers/fiestasController');

router.get('/', FiestasController.getAllFiestas);
router.get('/:anio', FiestasController.getFiestasPorAnio);
router.post('/', FiestasController.createFiesta);

module.exports = router;
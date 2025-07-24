const express = require('express');
const router = express.Router();
const ColaboradoresController = require('../controllers/colaboradoresController');

router.get('/', ColaboradoresController.getAllColaboradores);
router.get('/:fiesta_id', ColaboradoresController.getColaboradoresPorFiesta);
router.post('/', ColaboradoresController.createColaborador);

module.exports = router;

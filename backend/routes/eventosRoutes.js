const express = require('express');
const router = express.Router();
const EventosController = require('../controllers/eventosController');

router.get('/', EventosController.getAllEventos);
router.get('/:fiesta_id', EventosController.getEventosPorFiesta);
router.get('/monlora/anio/:anio', EventosController.getEventosMonloraPorAnio);
router.get('/monlora/religiosos/anio/:anio', EventosController.getEventosReligiososMonloraPorAnio);
router.post('/', EventosController.createEvento);

module.exports = router;

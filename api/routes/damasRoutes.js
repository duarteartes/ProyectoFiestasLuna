const express = require('express');
const router = express.Router();
const DamasController = require('../controllers/damasController');

router.get('/', DamasController.getAllDamas);
router.get('/:fiesta_id', DamasController.getDamasPorFiesta);
router.post('/', DamasController.createDama);

module.exports = router;

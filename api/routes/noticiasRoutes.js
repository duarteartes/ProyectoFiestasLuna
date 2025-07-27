const express = require('express');
const router = express.Router();
const NoticiasController = require('../controllers/noticiasController');

router.get('/', NoticiasController.getAllNoticias);
router.get('/:fiesta_id', NoticiasController.getNoticiasPorFiesta);
router.get('/monlora/actual', NoticiasController.getNoticiasMonloraActual);
router.post('/', NoticiasController.createNoticia);

module.exports = router;

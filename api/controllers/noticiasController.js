const NoticiasModel = require('../models/noticiasModel');

const getAllNoticias = async (req, res) => {
    try {
        const noticias = await NoticiasModel.getNoticias();
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las noticias', error });
    }
};

const getNoticiasPorFiesta = async (req, res) => {
    try {
        const { fiesta_id } = req.params;
        const noticias = await NoticiasModel.getNoticiasPorFiestaId(fiesta_id);
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las noticias de la fiesta', error });
    }
};

const createNoticia = async (req, res) => {
    try {
        const { fiesta_id, fecha, mensaje } = req.body;
        if (!fiesta_id || !fecha || !mensaje) {
            return res.status(400).json({ message: 'Campos obligatorios: fiesta_id, fecha, mensaje' });
        }
        const id = await NoticiasModel.createNoticia({ fiesta_id, fecha, mensaje });
        res.status(201).json({ id, fiesta_id, fecha, mensaje });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la noticia', error });
    }
};

module.exports = {
    getAllNoticias,
    getNoticiasPorFiesta,
    createNoticia
};

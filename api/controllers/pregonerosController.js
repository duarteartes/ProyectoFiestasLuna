const PregonerosModel = require('../models/pregonerosModel');

const getAllPregoneros = async (req, res) => {
    try {
        const pregoneros = await PregonerosModel.getPregoneros();
        res.json(pregoneros);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pregoneros', error });
    }
};

const getPregonerosPorFiesta = async (req, res) => {
    try {
        const { fiesta_id } = req.params;
        const pregoneros = await PregonerosModel.getPregonerosPorFiestaId(fiesta_id);
        res.json(pregoneros);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pregoneros de la fiesta', error });
    }
};

const createPregonero = async (req, res) => {
    try {
        const { fiesta_id, texto, imagen_url } = req.body;
        if (!fiesta_id || !texto) {
            return res.status(400).json({ message: 'Campos obligatorios: fiesta_id, texto' });
        }
        const id = await PregonerosModel.createPregonero({ fiesta_id, texto, imagen_url });
        res.status(201).json({ id, fiesta_id, texto, imagen_url });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el pregonero', error });
    }
};

module.exports = {
    getAllPregoneros,
    getPregonerosPorFiesta,
    createPregonero
};

const SaludosModel = require('../models/saludosModel');

const getAllSaludos = async (req, res) => {
    try {
        const saludos = await SaludosModel.getSaludos();
        res.json(saludos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los saludos', error });
    }
};

const getSaludosPorFiesta = async (req, res) => {
    try {
        const { fiesta_id } = req.params;
        const saludos = await SaludosModel.getSaludosPorFiestaId(fiesta_id);
        res.json(saludos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los saludos de la fiesta', error });
    }
};

const createSaludo = async (req, res) => {
    try {
        const { fiesta_id, autor, cargo, mensaje, categoria } = req.body;
        if (!fiesta_id || !autor || !mensaje) {
            return res.status(400).json({ message: 'Campos obligatorios: fiesta_id, autor, mensaje' });
        }
        const id = await SaludosModel.createSaludo({ fiesta_id, autor, cargo, mensaje, categoria });
        res.status(201).json({ id, fiesta_id, autor, cargo, mensaje, categoria });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el saludo', error });
    }
};

module.exports = {
    getAllSaludos,
    getSaludosPorFiesta,
    createSaludo
};

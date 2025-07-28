const AniosModel = require('../models/aniosModel');

const getAllAnios = async (req, res) => {
    try {
        const anios = await AniosModel.getAnios();
        res.json(anios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los años', error });
    }
};

const createAnio = async (req, res) => {
    try {
        const { anio } = req.body;
        if (!anio) return res.status(400).json({ message: 'El año es obligatorio' });
        const id = await AniosModel.createAnio(anio);
        res.status(201).json({ id, anio });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el año', error });
    }
};

module.exports = {
    getAllAnios,
    createAnio
};

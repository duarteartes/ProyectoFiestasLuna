const FiestasModel = require('../models/fiestasModel');

const getAllFiestas = async (req, res) => {
    try {
        const fiestas = await FiestasModel.getFiestas();
        res.json(fiestas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las fiestas', error });
    }
};

const getFiestasPorAnio = async (req, res) => {
    try {
        const { anio } = req.params;
        const fiestas = await FiestasModel.getFiestasByAnio(anio);
        res.json(fiestas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las fiestas del año indicado', error });
    }
};

const createFiesta = async (req, res) => {
    try {
        const { anio_id, tipo, texto_comision } = req.body;
        if (!anio_id || !tipo) {
            return res.status(400).json({ message: 'anio_id y tipo son obligatorios' });
        }
        const id = await FiestasModel.createFiesta(anio_id, tipo, texto_comision);
        res.status(201).json({ id, anio_id, tipo, texto_comision });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la fiesta', error });
    }
};

module.exports = {
    getAllFiestas,
    getFiestasPorAnio,
    createFiesta
};
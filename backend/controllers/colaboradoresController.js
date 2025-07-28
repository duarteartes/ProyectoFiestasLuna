const ColaboradoresModel = require('../models/colaboradoresModel');

const getAllColaboradores = async (req, res) => {
    try {
        const colaboradores = await ColaboradoresModel.getColaboradores();
        res.json(colaboradores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los colaboradores', error });
    }
};

const getColaboradoresPorFiesta = async (req, res) => {
    try {
        const { fiesta_id } = req.params;
        const colaboradores = await ColaboradoresModel.getColaboradoresPorFiestaId(fiesta_id);
        res.json(colaboradores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los colaboradores de la fiesta', error });
    }
};

const createColaborador = async (req, res) => {
    try {
        const { fiesta_id, nombre, logo_url, web_url } = req.body;
        if (!fiesta_id || !nombre) {
            return res.status(400).json({ message: 'Campos obligatorios: fiesta_id, nombre' });
        }
        const id = await ColaboradoresModel.createColaborador({ fiesta_id, nombre, logo_url, web_url });
        res.status(201).json({ id, fiesta_id, nombre, logo_url, web_url });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el colaborador', error });
    }
};

module.exports = {
    getAllColaboradores,
    getColaboradoresPorFiesta,
    createColaborador
};

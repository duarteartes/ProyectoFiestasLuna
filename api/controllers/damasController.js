const DamasModel = require('../models/damasModel');

const getAllDamas = async (req, res) => {
  try {
    const damas = await DamasModel.getDamas();
    res.json(damas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las damas', error });
  }
};

const getDamasPorFiesta = async (req, res) => {
  try {
    const { fiesta_id } = req.params;
    const damas = await DamasModel.getDamasPorFiestaId(fiesta_id);
    res.json(damas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las damas de la fiesta', error });
  }
};

const createDama = async (req, res) => {
    try {
        const { fiesta_id, nombre, imagen_url } = req.body;
        if (!fiesta_id || !nombre) {
            return res.status(400).json({ message: 'Campos obligatorios: fiesta_id, nombre' });
        }
        const id = await DamasModel.createDama({ fiesta_id, nombre, imagen_url });
        res.status(201).json({ id, fiesta_id, nombre, imagen_url });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la dama', error });
    }
};

module.exports = {
    getAllDamas,
    getDamasPorFiesta,
    createDama
};

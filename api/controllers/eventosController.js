const EventosModel = require('../models/eventosModel');

const getAllEventos = async (req, res) => {
    try {
        const eventos = await EventosModel.getEventos();
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los eventos', error });
    }
};

const getEventosPorFiesta = async (req, res) => {
    try {
        const { fiesta_id } = req.params;
        const eventos = await EventosModel.getEventosPorFiestaId(fiesta_id);
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los eventos de la fiesta', error });
    }
};

const getEventosMonloraPorAnio = async (req, res) => {
    try {
        const { anio } = req.params;
        const eventos = await EventosModel.getEventosGeneralesMonloraPorAnio(anio);
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los eventos de septiembre', error });
    }
};


const createEvento = async (req, res) => {
    try {
        const { fiesta_id, fecha, hora_inicio, titulo } = req.body;
        if (!fiesta_id || !fecha || !hora_inicio || !titulo) {
            return res.status(400).json({ message: 'Campos obligatorios: fiesta_id, fecha, hora_inicio, titulo' });
        }
        const id = await EventosModel.createEvento(req.body);
        res.status(201).json({ id, ...req.body });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el evento', error });
    }
};

module.exports = {
    getAllEventos,
    getEventosPorFiesta,
    getEventosMonloraPorAnio,
    createEvento
};

const db = require('../db');

const getEventos = async () => {
    const [rows] = await db.query(`
        SELECT e.*, f.tipo AS fiesta_tipo, a.anio
        FROM eventos e
        JOIN fiestas f ON e.fiesta_id = f.id
        JOIN anios a ON f.anio_id = a.id
        ORDER BY e.fecha, e.hora_inicio
    `);
    return rows;
};

const getEventosPorFiestaId = async (fiesta_id) => {
    const [rows] = await db.query(
        'SELECT * FROM eventos WHERE fiesta_id = ? ORDER BY fecha, hora_inicio',
        [fiesta_id]
    );
    return rows;
};

const getEventosGeneralesMonloraPorAnio = async (anio) => {
    const [rows] = await db.query(`
        SELECT e.*, a.anio
        FROM eventos e
        JOIN fiestas f ON e.fiesta_id = f.id
        JOIN anios a ON f.anio_id = a.id
        WHERE f.tipo = 'monlora' AND a.anio = ? AND e.categoria = 'general'
        ORDER BY e.fecha, e.hora_inicio
    `, [anio]);
    return rows;
};


const createEvento = async (evento) => {
    const { fiesta_id, fecha, hora_inicio, hora_fin, titulo, descripcion, categoria } = evento;
    const [result] = await db.query(
        `INSERT INTO eventos
        (fiesta_id, fecha, hora_inicio, hora_fin, titulo, descripcion, categoria)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [fiesta_id, fecha, hora_inicio, hora_fin || null, titulo, descripcion || null, categoria || null]
    );
    return result.insertId;
};

module.exports = {
    getEventos,
    getEventosPorFiestaId,
    getEventosGeneralesMonloraPorAnio,
    createEvento
};

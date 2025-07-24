const db = require('../db');

const getSaludos = async () => {
    const [rows] = await db.query(`
        SELECT s.*, f.tipo AS fiesta_tipo, a.anio
        FROM saludos s
        JOIN fiestas f ON s.fiesta_id = f.id
        JOIN anios a ON f.anio_id = a.id
        ORDER BY a.anio DESC, f.tipo
    `);
    return rows;
};

const getSaludosPorFiestaId = async (fiesta_id) => {
    const [rows] = await db.query(
        'SELECT * FROM saludos WHERE fiesta_id = ?',
        [fiesta_id]
    );
    return rows;
};

const createSaludo = async (saludo) => {
    const { fiesta_id, autor, cargo, mensaje, categoria } = saludo;
    const [result] = await db.query(
        `INSERT INTO saludos (fiesta_id, autor, cargo, mensaje, categoria)
        VALUES (?, ?, ?, ?, ?)`,
        [fiesta_id, autor, cargo, mensaje, categoria]
    );
    return result.insertId;
};

module.exports = {
    getSaludos,
    getSaludosPorFiestaId,
    createSaludo
};

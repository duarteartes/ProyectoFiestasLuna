const db = require('../db');

const getPregoneros = async () => {
    const [rows] = await db.query(`
        SELECT p.*, f.tipo AS fiesta_tipo, a.anio
        FROM pregoneros p
        JOIN fiestas f ON p.fiesta_id = f.id
        JOIN anios a ON f.anio_id = a.id
        ORDER BY a.anio DESC
    `);
    return rows;
};

const getPregonerosPorFiestaId = async (fiesta_id) => {
    const [rows] = await db.query(
        'SELECT * FROM pregoneros WHERE fiesta_id = ?',
        [fiesta_id]
    );
    return rows;
};

const createPregonero = async (pregonero) => {
    const { fiesta_id, texto, imagen_url } = pregonero;
    const [result] = await db.query(
        'INSERT INTO pregoneros (fiesta_id, texto, imagen_url) VALUES (?, ?, ?)',
        [fiesta_id, texto, imagen_url]
    );
    return result.insertId;
};

module.exports = {
    getPregoneros,
    getPregonerosPorFiestaId,
    createPregonero
};

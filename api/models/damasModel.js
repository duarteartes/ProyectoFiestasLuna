const db = require('../db');

const getDamas = async () => {
    const [rows] = await db.query(`
        SELECT d.*, f.tipo AS fiesta_tipo, a.anio
        FROM damas d
        JOIN fiestas f ON d.fiesta_id = f.id
        JOIN anios a ON f.anio_id = a.id
        ORDER BY a.anio DESC, d.nombre
    `);
    return rows;
};

const getDamasPorFiestaId = async (fiesta_id) => {
    const [rows] = await db.query(
        'SELECT * FROM damas WHERE fiesta_id = ? ORDER BY nombre',
        [fiesta_id]
    );
    return rows;
};

const createDama = async (dama) => {
    const { fiesta_id, nombre, imagen_url } = dama;
    const [result] = await db.query(
        'INSERT INTO damas (fiesta_id, nombre, imagen_url) VALUES (?, ?, ?)',
        [fiesta_id, nombre, imagen_url]
    );
    return result.insertId;
};

module.exports = {
    getDamas,
    getDamasPorFiestaId,
    createDama
};

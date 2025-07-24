const db = require('../db');

const getColaboradores = async () => {
    const [rows] = await db.query(`
        SELECT c.*, f.tipo AS fiesta_tipo, a.anio
        FROM colaboradores c
        JOIN fiestas f ON c.fiesta_id = f.id
        JOIN anios a ON f.anio_id = a.id
        ORDER BY a.anio DESC, c.nombre
    `);
    return rows;
};

const getColaboradoresPorFiestaId = async (fiesta_id) => {
    const [rows] = await db.query(
        'SELECT * FROM colaboradores WHERE fiesta_id = ? ORDER BY nombre',
        [fiesta_id]
    );
    return rows;
};

const createColaborador = async (colaborador) => {
    const { fiesta_id, nombre, logo_url, web_url } = colaborador;
    const [result] = await db.query(
        'INSERT INTO colaboradores (fiesta_id, nombre, logo_url, web_url) VALUES (?, ?, ?, ?)',
        [fiesta_id, nombre, logo_url, web_url]
    );
    return result.insertId;
};

module.exports = {
    getColaboradores,
    getColaboradoresPorFiestaId,
    createColaborador
};

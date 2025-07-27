const db = require('../db');

const getFiestas = async () => {
    const [rows] = await db.query(`
        SELECT f.*, a.anio
        FROM fiestas f
        JOIN anios a ON f.anio_id = a.id
        ORDER BY a.anio DESC, f.tipo
    `);
    return rows;
};

const getFiestasByAnio = async (anio) => {
    const [rows] = await db.query(`
        SELECT f.*, a.anio
        FROM fiestas f
        JOIN anios a ON f.anio_id = a.id
        WHERE a.anio = ?
        ORDER BY f.tipo
    `, [anio]);
    return rows;
};

const getTextoComisionMonloraActual = async () => {
    const [rows] = await db.query(`
        SELECT f.texto_comision
        FROM fiestas f
        JOIN anios a ON f.anio_id = a.id
        WHERE a.anio = YEAR(CURDATE()) AND f.tipo = 'monlora'
        LIMIT 1
    `);
    return rows[0];
};

const createFiesta = async (anio_id, tipo, texto_comision) => {
    const [result] = await db.query(
        'INSERT INTO fiestas (anio_id, tipo, texto_comision) VALUES (?, ?, ?)',
        [anio_id, tipo, texto_comision]
    );
    return result.insertId;
};

module.exports = {
    getFiestas,
    getFiestasByAnio,
    getTextoComisionMonloraActual,
    createFiesta
};
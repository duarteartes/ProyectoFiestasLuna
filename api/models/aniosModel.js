const db = require('../db');

const getAnios = async () => {
    const [rows] = await db.query('SELECT * FROM anios ORDER BY anio DESC');
    return rows;
};

const createAnio = async (anio) => {
    const [result] = await db.query('INSERT INTO anios (anio) VALUES (?)', [anio]);
    return result.insertId;
};

module.exports = {
    getAnios,
    createAnio
};

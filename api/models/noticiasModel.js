const db = require('../db');

const getNoticias = async () => {
    const [rows] = await db.query(`
        SELECT n.*, f.tipo AS fiesta_tipo, a.anio
        FROM noticias n
        JOIN fiestas f ON n.fiesta_id = f.id
        JOIN anios a ON f.anio_id = a.id
        ORDER BY n.fecha DESC
    `);
    return rows;
};

const getNoticiasPorFiestaId = async (fiesta_id) => {
    const [rows] = await db.query(
        'SELECT * FROM noticias WHERE fiesta_id = ? ORDER BY fecha DESC',
        [fiesta_id]
    );
    return rows;
};

const createNoticia = async (noticia) => {
    const { fiesta_id, fecha, mensaje } = noticia;
    const [result] = await db.query(
        'INSERT INTO noticias (fiesta_id, fecha, mensaje) VALUES (?, ?, ?)',
        [fiesta_id, fecha, mensaje]
    );
    return result.insertId;
};

module.exports = {
    getNoticias,
    getNoticiasPorFiestaId,
    createNoticia
};

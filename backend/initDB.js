// initDB.js
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function initDB() {
    try {
        const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

        // 1. Conexión inicial para crear la BBDD si no existe
        const connection = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            multipleStatements: true
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
        console.log(`✅ Base de datos '${DB_NAME}' verificada o creada.`);

        await connection.end();

        // 2. Nueva conexión apuntando ya a la BBDD
        const dbConnection = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            multipleStatements: true
        });

        // Cargar SQL para crear tablas (sin USE)
        const sql = fs.readFileSync(path.join(__dirname, 'sql', 'database.sql'), 'utf8');

        await dbConnection.query(sql);
        console.log('✅ Tablas creadas correctamente.');

        await dbConnection.end();
    } catch (err) {
        console.error('❌ Error al inicializar la base de datos:', err);
        throw err;
    }
}

module.exports = initDB;

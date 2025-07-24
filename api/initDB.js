// initDB.js
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function initDB() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || ''
        });

        const sql = fs.readFileSync(path.join(__dirname, 'sql', 'database.sql'), 'utf8');
        await connection.query(sql);
        console.log('✅ Base de datos y tablas creadas correctamente.');
        await connection.end();
    } catch (err) {
        console.error('❌ Error al inicializar la base de datos:', err);
    }
}

initDB();

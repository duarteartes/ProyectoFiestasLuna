const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const initDB = require('./initDB');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('🎉 API Fiestas Luna funcionando');
});

const aniosRoutes = require('./routes/aniosRoutes');
const fiestasRoutes = require('./routes/fiestasRoutes');
const eventosRoutes = require('./routes/eventosRoutes');
const noticiasRoutes = require('./routes/noticiasRoutes');
const saludosRoutes = require('./routes/saludosRoutes');
const pregonerosRoutes = require('./routes/pregonerosRoutes');
const damasRoutes = require('./routes/damasRoutes');
const colaboradoresRoutes = require('./routes/colaboradoresRoutes');

app.use('/api/anios', aniosRoutes);
app.use('/api/fiestas', fiestasRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/saludos', saludosRoutes);
app.use('/api/pregoneros', pregonerosRoutes);
app.use('/api/damas', damasRoutes);
app.use('/api/colaboradores', colaboradoresRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

initDB().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
    });
}).catch(err => {
    console.error('❌ Error al iniciar la base de datos. El servidor no se ha iniciado.');
});
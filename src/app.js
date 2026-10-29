const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.json({ mensaje: 'API funcionando' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/api/tareas', (req, res) => {
    res.json([
        { id: 1, titulo: 'Configurar GitHub Actions', completada: true },
        { id: 2, titulo: 'Desplegar en Render', completada: false },
    ]);
});

app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: 'Hola desde el pipeline de CI/CD' });
});

module.exports = app;
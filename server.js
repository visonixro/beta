const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde la carpeta public
app.use(express.static('public'));
app.use(express.static('.'));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Manejar errores 404
app.use((req, res) => {
    console.log('404 for:', req.url);
    res.status(404).send('File not found');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

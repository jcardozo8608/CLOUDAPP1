const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    // Apunta directamente a la raíz en lugar de buscar la carpeta 'views'
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`);
});

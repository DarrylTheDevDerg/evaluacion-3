const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

// Serve static files under /assets/ URL path
app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));



const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'datos'
});

conexion.connect(err => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    return;
  }
  console.log('Conexión a MySQL exitosa');
});

app.get('/api/datos', (req, res) => {
  conexion.query('SELECT * FROM bloques', (err, resultados) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al consultar la base de datos');
      return;
    }
    res.json(resultados);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(port, () => {

  console.log(`Servidor Express en http://localhost:${port}`);
});



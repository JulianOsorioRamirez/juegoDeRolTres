require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const { dbConnect } = require('./conexion/mongo');

const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());
app.use(require('./routes/router'));
dbConnect();
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

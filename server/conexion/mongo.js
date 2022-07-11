const mongoose = require('mongoose');

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose
    .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('BBDD en Mongodb conectada');
    })
    .catch((err) => {
      console.log('Error en la conexión con la BBDD en Mongodb ');
      console.error(err);
    });
};
module.exports = { dbConnect };

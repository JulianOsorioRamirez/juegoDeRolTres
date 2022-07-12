const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const provinciaSchema = new Schema(
  {
    nombre: { type: String },
    identificador: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const Provincia = model('Provincia', provinciaSchema);

module.exports = Provincia;

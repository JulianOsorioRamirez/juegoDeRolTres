const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const inscripcionSchema = new Schema(
  {
    evento: { type: String },
    dorsal: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const Inscripcion = model('Inscripcion', inscripcionSchema);

module.exports = Inscripcion;

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const eventoSchema = new Schema(
  {
    nombre: { type: String },
    fecha: { type: String },
    participantes: [{ type: String }],
    imagen: [{ type: String }],
    provincia: { type: String },
    precio: { type: String },
    maxParticipantes: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const Evento = model('Evento', eventoSchema);

module.exports = Evento;

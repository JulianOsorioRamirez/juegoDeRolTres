const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const userSchema = new Schema(
  {
    userName: { type: String },
    apellidos: { type: String },
    password: { type: String },
    email: { type: String },
    tarjeta: { type: String },
    role: { type: String },
    inscripcion: { type: Array },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const User = model('User', userSchema);

module.exports = User;

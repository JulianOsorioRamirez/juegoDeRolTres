const { httpError } = require('../helpers/handleError');
const mongoose = require('mongoose');

const Evento = require('../models/Evento');

const getEventos = async (req, res) => {
  try {
    const eventos = await Evento.find({});
    res.json(eventos);
  } catch (err) {
    console.log(err);
    httpError(res, err);
  }
};

const getEvento = async (req, res) => {
  try {
    const eventoId = req.params.id;

    const evento = await Evento.findById(eventoId);

    if (!evento) {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
    res.json(evento);
  } catch (err) {
    httpError(res, err);
  }
};
const createEvento = async (req, res) => {
  const { nombre, fecha, participantes, imagen } = req.body;

  try {
    const evento = await new Evento({
      nombre,
      fecha,
      participantes,
      imagen,
    });
    evento.save().then((result) => {
      console.log(result);
      res.status(200);
      res.send('Evento creado correctamente');
    });
  } catch (err) {
    httpError(res, err);
  }
};

const updateEvento = async (req, res) => {
  try {
    const eventoId = req.params.id;

    const evento = await Evento.findById(eventoId);

    if (!evento) {
      res.status(404).json({ error: 'Evento no encontrada' });
    }

    const newEvento = {
      ...req.body,
    };
    const eventoUpdate = await Evento.findByIdAndUpdate(eventoId, newEvento, {
      new: true,
    });
    res.json(eventoUpdate);
  } catch (err) {
    httpError(res, err);
  }
};
const deleteEvento = async (req, res) => {
  try {
    const eventoId = req.params.id;

    const evento = await Evento.findById(eventoId);

    if (!evento) {
      res.status(404).json({ error: 'Evento no encontrado' });
    }

    await Evento.findByIdAndDelete(eventoId);
    res.json({ msg: 'Evento eliminado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getEventos,
  getEvento,
  createEvento,
  updateEvento,
  deleteEvento,
};
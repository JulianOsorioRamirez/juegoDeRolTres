const { httpError } = require('../helpers/handleError');
const mongoose = require('mongoose');

const Inscripcion = require('../models/Inscripcion');

const getInscripcions = async (req, res) => {
  try {
    const inscripcion = await Inscripcion.find({});
    res.json(inscripcion);
  } catch (err) {
    console.log(err);
    httpError(res, err);
  }
};

const getInscripcion = async (req, res) => {
  try {
    const inscripcionId = req.params.id;

    const inscripcion = await Inscripcion.findById(inscripcionId);

    if (!inscripcion) {
      res.status(404).json({ error: 'Inscripcion no encontrada' });
    }
    res.json(inscripcion);
  } catch (err) {
    httpError(res, err);
  }
};
const createInscripcion = async (req, res) => {
  const { evento } = req.body;
  console.log(evento);

  try {
    const inscripcion = await new Inscripcion({
      evento,
      dorsal: "",
    });
    inscripcion.save().then((result) => {
     res.json(result);
    });
  } catch (err) {
    httpError(res, err);
  }
};


const updateInscripcion = async (req, res) => {
  try {
    const inscripcionId = req.params.id;

    const inscripcion = await Inscripcion.findById(inscripcionId);

    if (!inscripcion) {
      res.status(404).json({ error: 'Inscripcion no encontrada' });
    }

    const newInscripcion = {
      ...req.body,
    };
    const inscripcionUpdate = await Inscripcion.findByIdAndUpdate(
      inscripcionId,
      newInscripcion,
      {
        new: true,
      }
    );
    res.json(inscripcionUpdate);
  } catch (err) {
    httpError(res, err);
  }
};
const deleteInscripcion = async (req, res) => {
  try {
    const inscripcionId = req.params.id;

    const inscripcion = await Inscripcion.findById(inscripcionId);

    if (!inscripcion) {
      res.status(404).json({ error: 'Inscripcion no encontrada' });
    }

    await Inscripcion.findByIdAndDelete(userId);
    res.json({ msg: 'inscripcion eliminada correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getInscripcions,
  getInscripcion,
  updateInscripcion,
  deleteInscripcion,
  createInscripcion,

};

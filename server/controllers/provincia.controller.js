const { httpError } = require('../helpers/handleError');
const mongoose = require('mongoose');

const Provincia = require('../models/Provincia');

const getProvincias = async (req, res) => {
  try {
    const provincia = await Provincia.find({});
    res.json(provincia);
  } catch (err) {
    console.log(err);
    httpError(res, err);
  }
};

const getProvincia = async (req, res) => {
  try {
    const provinciaId = req.params.id;

    const provincia = await Provincia.findById(provinciaId);

    if (!provincia) {
      res.status(404).json({ error: 'Provincia no encontrada' });
    }
    res.json(provincia);
  } catch (err) {
    httpError(res, err);
  }
};
const createProvincia = async (req, res) => {
  const { nombre, identificador } = req.body;

  try {
    const provincia = await new Provincia({
      nombre,
      identificador,
    });
    provincia.save().then((result) => {
      console.log(result);
      res.status(200);
      res.send('Provincia creada correctamente');
    });
  } catch (err) {
    httpError(res, err);
  }
};

const updateProvincia = async (req, res) => {
  try {
    const provinciaId = req.params.id;

    const provincia = await Provincia.findById(eventoId);

    if (!provincia) {
      res.status(404).json({ error: 'Provincia no encontrada' });
    }

    const newProvincia = {
      ...req.body,
    };
    const provinciaUpdate = await Provincia.findByIdAndUpdate(
      provinciaId,
      newProvincia,
      {
        new: true,
      }
    );
    res.json(provinciaUpdate);
  } catch (err) {
    httpError(res, err);
  }
};
const deleteProvincia = async (req, res) => {
  try {
    const provinciaId = req.params.id;

    const provincia = await Provincia.findById(provinciaId);

    if (!provincia) {
      res.status(404).json({ error: 'Provincia no encontrada' });
    }

    await Provincia.findByIdAndDelete(userId);
    res.json({ msg: 'provincia eliminada correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getProvincias,
  getProvincia,
  createProvincia,
  updateProvincia,
  deleteProvincia,
};

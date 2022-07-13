const { httpError } = require('../helpers/handleError');
const mongoose = require('mongoose');

const Evento = require('../models/Evento');

const getEventos = async (req, res) => {
  try {
    console.log(req.body);



    const eventos = await Evento.find({});
   
    res.json({
      message: true,
      eventos
    });
   
  } catch (err) {
    console.log(err);
    httpError(res, err);
  }
};
const getEventosAndalucia = async (req, res) => {
  try {
    const provinciaEvento = req.body.provincia;
    const eventos = await Evento.find({ provincia: provinciaEvento });
    // console.log(eventos);

    res.json({
      message: true,
      eventos
    });
  } catch (err) {
    console.log(err);
    httpError(res, err);
  }
};
const getComprar = async (req, res) => {
  try {
    const idPrueba = req.body.idPrueba

    const eventos = await Evento.find({ _id: idPrueba });

    console.log(eventos);
    const MaxPer = eventos[0].maxParticipantes;
    console.log(MaxPer);

    if ((eventos[0].participantes).length <= MaxPer) {
      res.json({
        message: true,
        eventos
      });
    } else {
      console.log("no se puede comprar");
      res.json({
        message: false,
        eventos

      });
    }

  }

  catch (err) {
    console.log(err);
    httpError(res, err);
  }
}

const getEvento = async (req, res) => {
  try {
    const eventoId = req.body.id;
    console.log(eventoId);
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
  const { nombre, fecha, participantes, imagen, provincia } = req.body;

  try {
    const evento = await new Evento({
      nombre,
      fecha,
      participantes,
      imagen,
      provincia,
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
const updateUserEvento = async (req, res) => {
  try {
    const evento = req.body.prueba;
    const emailUser = req.body.emailUser;

    console.log(emailUser);
    const eventoFind = await Evento.findOne({ _id: evento });
    // console.log(eventoFind.participantes);
    if (!eventoFind) {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
      const newEvento = { $push: {
        participantes: emailUser}
      };
      const eventoUpdate = await Evento.findByIdAndUpdate(evento, newEvento, {
        new: true,
      });
      console.log(eventoUpdate);
 
    


    res.json(eventoUpdate);

  } catch (err) {
    httpError(res, err);

  }

  }
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
  getEventosAndalucia,
  getComprar,
  updateUserEvento,
};

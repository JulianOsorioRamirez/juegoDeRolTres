const express = require('express');
const router = express.Router();
const { checkAuth } = require('../middlewares/auth');

const { login, registro } = require('../controllers/auth.controller');
const {
  getEventos,
  getEventosAndalucia,
  getComprar,
  getEvento,
  createEvento,
  updateEvento,
  deleteEvento,
  updateUserEvento,
  AplicarDorsal,
} = require('../controllers/evento.controller');
const {
  getUsers,
  getUser,
  getTarjetaUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');
const {
  getProvincias,
  getProvincia,
  createProvincia,
  updateProvincia,
  deleteProvincia,
} = require('../controllers/provincia.controller');
const {
  getInscripcions,
  getInscripcion,
  createInscripcion,
  updateInscripcion,
  deleteInscripcion,

} = require('../controllers/inscripcion.controller');
router.post('/login', login);
router.post('/register', registro);
router.get('/eventos', getEventos);
router.get('/evento/:id', getEvento);
router.post('/eventosAndalucia', getEventosAndalucia);
router.post('/eventoCompra', getComprar);
router.post('/eventos', createEvento);
router.post('/apliDorsal', AplicarDorsal);
router.put('/eventos/:id', updateEvento);
router.put('/eventosUsuarios', updateUserEvento);
router.delete('/eventos/:id', deleteEvento);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/users', createUser);
router.put('/tarjeta', getTarjetaUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/provincias', getProvincias);
router.get('/provincia/:id', getProvincia);
router.post('/provincias', createProvincia);
router.put('/provincias/:id', updateProvincia);
router.delete('/provincias/:id', deleteProvincia);
router.get('/inscripcions', getInscripcions);
router.get('/inscripcion/:id', getInscripcion);
router.post('/inscripcion', createInscripcion);

router.put('/inscripcion/:id', updateInscripcion);
router.delete('/inscripcion/:id', deleteInscripcion);

module.exports = router;

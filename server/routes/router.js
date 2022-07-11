const express = require('express');
const router = express.Router();
const { login, registro } = require('../controllers/auth.controller');
const {
  getEventos,
  getEventosAndalucia,
  getEvento,
  createEvento,
  updateEvento,
  deleteEvento,
  
} = require('../controllers/evento.controller');
router.post('/login', login);
router.post('/register', registro);
router.get('/eventos', getEventos);
router.get('/evento/:id', getEvento);
router.post('/eventosAndalucia', getEventosAndalucia);
router.post('/eventos', createEvento);
router.put('/eventos/:id', updateEvento);
router.delete('/eventos/:id', deleteEvento);

module.exports = router;

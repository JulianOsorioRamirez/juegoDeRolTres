const express = require('express');
const router = express.Router();
const { login, registro } = require('../controllers/auth.controller');
const {
  getEventos,
  getEvento,
  createEvento,
  updateEvento,
  deleteEvento,
} = require('../controllers/evento.controller');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');
router.post('/login', login);
router.post('/register', registro);
router.get('/eventos', getEventos);
router.get('/evento/:id', getEvento);
router.post('/eventos', createEvento);
router.put('/eventos/:id', updateEvento);
router.delete('/eventos/:id', deleteEvento);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;

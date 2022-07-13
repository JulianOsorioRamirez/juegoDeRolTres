const { httpError } = require('../helpers/handleError');
const mongoose = require('mongoose');

const User = require('../models/User');
const { hash } = require('bcryptjs');
const { encrypt } = require('../helpers/helper');

const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (err) {
    console.log(err);
    httpError(res, err);
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (err) {
    httpError(res, err);
  }
};
const createUser = async (req, res) => {
  const { userName, apellidos, password, email, tarjeta, role } = req.body;

  try {
    const user = await new User({
      userName,
      apellidos,
      password: await encrypt(password),
      email,
      tarjeta,
      role,
    });
    user.save().then((result) => {
      console.log(result);
      res.status(200);
      res.send('Usuario creado correctamente');
    });
  } catch (err) {
    httpError(res, err);
  }
};
const getTarjetaUser = async (req, res) => {
  
  try {
    const userMail = req.body.emailUser;
    const nTarjeta = req.body.nTarjeta;
    console.log(nTarjeta);
    const user = await User.findOne({ email: userMail });
    if (!user) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
   const newTarjeta = { $set:{
    tarjeta : nTarjeta}
   }
    const userUpdate = await User.findOneAndReplace(user, newTarjeta, {
      
    });
    res.json(userUpdate);



  } catch (err) {
    httpError(res, err);
  }
}



const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const nTarjeta = req.params.nTarjeta;
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ error: 'Usuario no encontrada' });
    }

    const newUser = {
      ...req.body,
    };
    const userUpdate = await User.findByIdAndUpdate(userId, newUser, {
      new: true,
    });
    res.json(userUpdate);
  } catch (err) {
    httpError(res, err);
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ error: 'User no encontrado' });
    }

    await User.findByIdAndDelete(userId);
    res.json({ msg: 'Usuario eliminado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getTarjetaUser,
};

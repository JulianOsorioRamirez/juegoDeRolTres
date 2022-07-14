const { httpError } = require('../helpers/handleError');

const User = require('../models/User');
const { tokenSign, compare } = require('../helpers/helper');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      res.status(404);
      res.send({ error: 'Usuario no encontrado' });
    }
    const checkPassword = await compare(password, user.password);

    const tokenSession = await tokenSign(user);

    if (checkPassword) {
      res.send({
        data: user,
        tokenSession,
      });
      return;
    } else {
      res.status(403);
      res.send('Acceso denegado');
    }
  } catch (err) {
    httpError(res, err);
  }
};
const registro = async (req, res) => {
  try {
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
  } catch (err) {
    httpError(res, err);
  }
};
module.exports = { login, registro };

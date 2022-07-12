const { verifyToken } = require('../helpers/helper');

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();

    const tokenData = await verifyToken(token);
    if (!tokenData) {
      res.status(401);
      res.send({ error: 'token no válido' });
    }
    console.log(tokenData);
    if (tokenData.user_id) {
      next();
    } else {
      res.status(409);
      res.send({ error: 'Por aquí no se pasa sin autorización' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { checkAuth };

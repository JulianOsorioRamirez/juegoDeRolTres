const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const encrypt = async (textPplain) => {
  const hash = await bcrypt.hash(textPplain, 10);
  return hash;
};

const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

const tokenSign = async (user) => {
  return jwt.sign(
    {
      user_id: user.user_id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2h',
    }
  );
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const decodeSign = (token) => {
  return jwt.decode(token, null);
};

module.exports = { encrypt, compare, tokenSign, verifyToken, decodeSign };

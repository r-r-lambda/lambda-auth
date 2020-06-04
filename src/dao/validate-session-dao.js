const authConfig = require('../config/auth-config');

const AuthorizationError = require('../errors/authorization-error');

const validateSessionDao = async (token) => {
  let dataFromToken;

  try {
    dataFromToken = await authConfig.auth().verifyIdToken(token);
  } catch (error) {
    throw new AuthorizationError(error);
  }

  return dataFromToken || null;
};

module.exports = validateSessionDao;

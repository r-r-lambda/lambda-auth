const authConfig = require('../config/auth-config');
const firebase = require('firebase-admin');

const AuthorizationError = require('../errors/authorization-error');

const validateSession = async (token) => {
  firebase.initializeApp(authConfig);

  let dataFromToken;

  try {
    dataFromToken = await firebase.auth().verifyIdToken(token);
  } catch (error) {
    throw new AuthorizationError(error);
  }

  return dataFromToken || null;
};

module.exports = validateSession;

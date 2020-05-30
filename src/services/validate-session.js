const validateSessionBL = require('../bl/validate-session-bl');

const validateSession = async (req, res, next) => {
  try {
    const token = req.apiGateway.event.authorizationToken.replace(
      'Bearer ',
      ''
    );

    const iamPolicy = validateSessionBL(token);

    res.send(iamPolicy);
  } catch (error) {
    next(error, req, res, next);
  }
};

module.exports = validateSession;

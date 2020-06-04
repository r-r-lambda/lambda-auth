const validateSessionBL = require('../bl/validate-session-bl');

const validateSession = async (event) => {
  let iamPolicy = null;

  try {
    const token = event.authorizationToken.replace('Bearer ', '');
    const methodArn = event.methodArn;

    iamPolicy = await validateSessionBL(token, methodArn);
  } catch (error) {
    console.log(error);
    return new Promise(function (_, reject) {
      reject(new Error('Error de authorización'));
    });
  }

  return new Promise(function (resolve) {
    resolve(iamPolicy);
  });
};

module.exports = validateSession;

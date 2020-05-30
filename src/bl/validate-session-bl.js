const validateSessionDao = require('../dao/validate-session-dao');

const validateSessionBL = async (token) => {
  const userData = await validateSessionDao(token);

  const authPolicy = {
    principalId: 'id_principal',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
        },
      ],
      context: {
        userInfo: userData,
      },
    },
  };

  return authPolicy;
};

module.exports = validateSessionBL;

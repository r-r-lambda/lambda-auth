const validateSessionDao = require('../dao/validate-session-dao');

const validateSessionBL = async (token, methodArn) => {
  const userData = await validateSessionDao(token);

  const authPolicy = {
    principalId: userData.email,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: 'arn:aws:execute-api:us-east-1:962378977114:*',
        },
      ],
    },
    context: {
      userEmail: userData.email,
    },
  };

  return authPolicy;
};

module.exports = validateSessionBL;

class AuthorizationError extends Error {
  constructor(cause) {
    super('Error de Autenticación.');
    this.name = 'AuthorizationError';
    this.error = cause.message;
    this.status = 403;

    console.error(cause.stack);
  }

  errorDto() {
    return {
      status: this.status,
      message: this.message,
      error: this.error,
    };
  }
}

module.exports = AuthorizationError;

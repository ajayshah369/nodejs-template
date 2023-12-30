const httpStatusCodes = require("./httpStatusCodes");

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    const code = httpStatusCodes[statusCode]
      ? httpStatusCodes[statusCode].code
      : 500;

    this.statusCode = code;
    this.status = httpStatusCodes[code].message;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;

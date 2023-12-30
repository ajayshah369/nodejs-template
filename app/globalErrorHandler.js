/* eslint-disable no-param-reassign */
const sendErrorDev = (err, req, res) => {
  res.status(err.statusCode).json({
    ...err,
    message: err._message || err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, req, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err._message || err.message
  });
};

module.exports = (err, req, res, next) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  if (!err.status) {
    err.status = "Internal Server Error";
  }

  if (process.env.NODE_ENV === "production") {
    sendErrorProd(err, req, res);
  } else {
    sendErrorDev(err, req, res);
  }
};

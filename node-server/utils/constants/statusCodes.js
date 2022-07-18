const success = 200;
const created = 201;
const fieldAlreadyExists = 202;
const partialContent = 206;
const wrongPassword = 207;
const badRequest = 400;
const unauthorized = 401;
const forbidden = 403;
const notFound = 404;
const conflict = 409;
const internalServerError = 500;
const notImplemented = 501;
const unprocessableEntity = 422;
const tooManyRequests = 429;
const serviceUnavailable = 503;
const gatewayTimeout = 504;
const gatewayTimeoutOrConnectionRefused = 504;

module.exports = {
  success,
  created,
  fieldAlreadyExists,
  partialContent,
  wrongPassword,
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  conflict,
  internalServerError,
  notImplemented,
  unprocessableEntity,
  tooManyRequests,
  serviceUnavailable,
  gatewayTimeout,
  gatewayTimeoutOrConnectionRefused,
};

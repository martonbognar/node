/**
 * Destroy the session and redirect to /
 */
module.exports = function (objectRepository, templateName) {
  return function (request, response, next) {
    return next();
  };
};

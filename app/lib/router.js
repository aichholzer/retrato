const Trafico = require('trafico');

module.exports = (options = {}) => {
  try {
    const traffic = new Trafico(options);
    return traffic.route();
  } catch (error) {
    return console.error(error.message);
  }
};

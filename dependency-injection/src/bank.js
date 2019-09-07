/* eslint-disable require-jsdoc */
let _name;
let _config;
let _loggerEnabled = false;

class Bank {
  constructor(name, config) {
    if (!name) {
      throw new Error('Specify a name.');
    }

    if (config.logger) {
      _loggerEnabled = true;
    }

    _name = name;
    _config = config;
  }

  showConfig() {
    if (!_loggerEnabled) return;

    _config.logger.write(_name);
  }
}

module.exports = Bank;

/* eslint-disable require-jsdoc */
class Logger {
  constructor() {
    if (this.constructor === Logger) {
      throw new Error('Cannot instantiate an abstract class.');
    }
  }

  write(message) {
    if (!this.onWrite) {
      throw new Error('onWrite function is not implemented.');
    }

    message = this.onWrite(message);
    console.log(`${new Date()} : ${message}`);
  }
}

class LowerCaseLogger extends Logger {
  onWrite(message) {
    return message.toLowerCase();
  }
}

class UpperCaseLogger extends Logger {
  onWrite(message) {
    return message.toUpperCase();
  }
}

const lowerCaseLogger = new LowerCaseLogger();
const upperCaseLogger = new UpperCaseLogger();

module.exports = {
  LowerCaseLogger: lowerCaseLogger,
  UpperCaseLogger: upperCaseLogger,
};



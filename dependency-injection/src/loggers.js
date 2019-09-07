/* eslint-disable require-jsdoc */
class Logger {
  constructor() {
    if (this.constructor === Logger) {
      throw new Error('Cannot instantiate an abstract class.');
    }
  }

  write(message) {
    if (!this.beforeWrite) {
      throw new Error('beforeWrite function is not implemented.');
    }

    message = this.beforeWrite(message);
    console.log(`${new Date()} : ${message}`);
  }
}

class LowerCaseLogger extends Logger {
  beforeWrite(message) {
    return message.toLowerCase();
  }
}

class UpperCaseLogger extends Logger {
  beforeWrite(message) {
    return message.toUpperCase();
  }
}

module.exports = {
  LowerCaseLogger: new LowerCaseLogger(),
  UpperCaseLogger: new UpperCaseLogger(),
};



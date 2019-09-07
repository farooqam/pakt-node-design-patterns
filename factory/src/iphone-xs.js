const Phone = require('./phone');

/* eslint-disable require-jsdoc */
class IPhoneXs {
  constructor(serialNum) {
    return new Phone(serialNum, 'iPhone XS', 'A12 Bionic (XS)');
  }
}

module.exports = IPhoneXs;

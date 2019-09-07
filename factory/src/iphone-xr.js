const Phone = require('./phone');

/* eslint-disable require-jsdoc */
class IPhoneXr {
  constructor(serialNum) {
    return new Phone(serialNum, 'iPhone XR', 'A12 Bionic');
  }
}

module.exports = IPhoneXr;

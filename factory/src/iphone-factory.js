/* eslint-disable require-jsdoc */
const IPhoneXr = require('./iphone-xr');
const IPhoneXs = require('./iphone-xs');

class IPhoneFactory {
  create(type, serialNum) {
    if (type.toLowerCase() === 'iphonexr') {
      return new IPhoneXr(serialNum);
    }

    if (type.toLowerCase() === 'iphonexs') {
      return new IPhoneXs(serialNum);
    }

    throw new Error(`Unknown type '${type}' passed to create().`);
  }
}

module.exports = new IPhoneFactory();

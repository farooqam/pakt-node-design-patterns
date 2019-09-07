const iPhoneFactory = require('./iphone-factory');

const iPhoneXr = iPhoneFactory.create('IPhoneXr', 'IPXR-001');
const iPhoneXs = iPhoneFactory.create('IPhoneXs', 'IPXS-001');

iPhoneXr.showConfig();
iPhoneXr.dial('4252223344');

iPhoneXs.showConfig();
iPhoneXs.dial('4258887777');

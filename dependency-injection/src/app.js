const Bank = require('./bank');
const loggers = require('./loggers');

const bank = new Bank('foo', {logger: loggers.UpperCaseLogger});
bank.showConfig();

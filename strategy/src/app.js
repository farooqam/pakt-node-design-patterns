const PaymentProcessor = require('./payment-processor');
const ChaseBankStrategy = require('./chase-bank-strategy');
const CitiBankStrategy = require('./citi-bank-strategy');
const BoaBankStrategy = require('./boa-bank-strategy');

const payment = new PaymentProcessor();
payment.pay(new ChaseBankStrategy(100, 'CHAS1234'));
payment.pay(new CitiBankStrategy(200, 'CITI1234'));
payment.pay(new BoaBankStrategy(300, 'BOAA1234'));

payment.refund(new ChaseBankStrategy(100, 'CHAS1234'));
payment.refund(new CitiBankStrategy(200, 'CITI1234'));
payment.refund(new BoaBankStrategy(300, 'BOAA1234'));

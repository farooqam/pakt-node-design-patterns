/* eslint-disable require-jsdoc */
const BankStrategy = require('./bank-strategy');

class BoaBankStrategy extends BankStrategy {
  constructor(amount, account) {
    super(amount, account);
    this.bankName = 'BOA';
  }

  processPayment() {
  }

  processRefund() {
  }
}

module.exports = BoaBankStrategy;

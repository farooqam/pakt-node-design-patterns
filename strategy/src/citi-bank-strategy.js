/* eslint-disable require-jsdoc */
const BankStrategy = require('./bank-strategy');

class CitiBankStrategy extends BankStrategy {
  constructor(amount, account) {
    super(amount, account);
    this.bankName = 'Citi';
  }

  processPayment() {
  }

  processRefund() {
  }
}

module.exports = CitiBankStrategy;

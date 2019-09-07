/* eslint-disable require-jsdoc */
const BankStrategy = require('./bank-strategy');

class ChaseBankStrategy extends BankStrategy {
  constructor(amount, account) {
    super(amount, account);
    this.bankName = 'Chase';
  }

  processPayment() {
  }

  processRefund() {
  }
}

module.exports = ChaseBankStrategy;

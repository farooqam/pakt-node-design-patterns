/* eslint-disable require-jsdoc */
class BankStrategy {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  pay() {
    console.log(`Payment for ${this.amount} 
      for account ${this.account} has been processed by ${this.bankName}.`);

    return this.processPayment();
  }

  refund() {
    console.log(`Refund for ${this.amount} 
      for account ${this.account} has been processed by ${this.bankName}.`);

    return this.processRefund();
  }
}

module.exports = BankStrategy;

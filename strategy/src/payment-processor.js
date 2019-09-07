/* eslint-disable require-jsdoc */
class PaymentProcessor {
  pay(strategy) {
    return strategy.pay();
  }

  refund(strategy) {
    return strategy.refund();
  }
}

module.exports = PaymentProcessor;

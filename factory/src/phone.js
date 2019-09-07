/* eslint-disable require-jsdoc */
class Phone {
  constructor(
      serialNum,
      model = 'Generic',
      processor = 'Generic'
  ) {
    this.serialNum = serialNum;
    this.config = {
      model,
      processor,
    };
  }

  dial(num) {
    console.log(`Dialing ${num}...`);
  }

  showConfig() {
    console.log(this.config);
  }
}

module.exports = Phone;

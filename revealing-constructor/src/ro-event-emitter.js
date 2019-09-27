/* eslint-disable require-jsdoc */
const EventEmitter = require('events');

class ReadOnlyEventEmitter extends EventEmitter {
  constructor(executor) {
    super();
    const emit = this.emit.bind(this);
    this.emit = undefined;
    executor(emit);
  }
};

module.exports = ReadOnlyEventEmitter;

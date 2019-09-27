/* eslint-disable require-jsdoc */
const ReadOnlyEventEmitter = require('./ro-event-emitter');

let ticker = null;

class Ticker {
  constructor(options) {
    if (options === undefined || options === null) {
      options = {interval: 1000};
    };

    ticker = new ReadOnlyEventEmitter((emit) => {
      let tickCount = 0;
      setInterval(() => emit('tick', tickCount++), options.interval);
    });
  }

  on(eventName, executor) {
    ticker.on(eventName, executor);
  }
}

module.exports = Ticker;

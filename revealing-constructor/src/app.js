const Ticker = require('./ticker');

const ticker = new Ticker({interval: 100});
ticker.on('tick', (tickCount) => console.log(tickCount, 'TICK'));


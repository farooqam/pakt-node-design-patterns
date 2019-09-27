/* const iPhoneFactory = require('./iphone-factory');

const iPhoneXr = iPhoneFactory.create('IPhoneXr', 'IPXR-001');
const iPhoneXs = iPhoneFactory.create('IPhoneXs', 'IPXS-001');

iPhoneXr.showConfig();
iPhoneXr.dial('4252223344');

iPhoneXs.showConfig();
iPhoneXs.dial('4258887777'); */

const profilerFactory = require('./profiler/profiler-factory');

const getRandomArray = (len) => {
  const profiler = profilerFactory.create(
      {label: `Generating a ${len} item array`});

  profiler.start();

  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(Math.random());
  }

  profiler.end();
};

getRandomArray(1e6);
console.log('Done');

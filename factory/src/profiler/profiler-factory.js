const Profiler = require('./profiler');

const create = (options) => {
  const env = process.env.NODE_ENV || 'development';

  if (env.toLowerCase() === 'development') {
    return new Profiler(options);
  }

  if (env.toLowerCase() === 'production') {
    return {
      start: () => {},
      end: () => {},
    };
  }
};

module.exports = {
  create,
};


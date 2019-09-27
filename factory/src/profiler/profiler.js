/* eslint-disable require-jsdoc */
class Profiler {
  constructor(options) {
    this.options = options;
    this.lastTime = null;
  }

  start() {
    this.lastTime = process.hrtime();
  }

  end() {
    const elapsed = process.hrtime(this.lastTime);
    console.log(
        `Timer "${this.options.label}" took ${elapsed[0]} seconds
        and ${elapsed[1]} nanoseconds.`);
  }
};

module.exports = Profiler;

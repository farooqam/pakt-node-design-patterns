/* eslint-disable require-jsdoc */
class Middleware {
  constructor(target) {
    this.target = target;
    this.middlewares = [];
    this.req = {};

    const prototype = Object.getPrototypeOf(this.target);

    Object.getOwnPropertyNames(prototype)
        .forEach((fn) => {
          if (fn !== 'constructor') return this.createFn(fn);
        });
  };

  use(middleware) {
    this.middlewares.push(middleware);
  };

  execute(i = 0) {
    if (i < this.middlewares.length) {
      this.middlewares[i].call(this, this.req, () => this.execute(i + 1));
    }
  };

  createFn(fn) {
    this[fn] = (args) => {
      this.req = args;
      this.execute();
      return this.target[fn].call(this, this.req);
    };
  }
}

module.exports = Middleware;


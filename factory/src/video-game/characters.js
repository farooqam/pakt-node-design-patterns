const stampit = require('stampit');

const character = stampit().props({
  name: 'anonymous',
  hp: 100,
  x: 0,
  y: 0,
});

const mover = stampit().methods({
  move(xInc, yInc) {
    this.x += xInc;
    this.y += yInc;
    console.log(`${this.name} moved to [${this.x}, ${this.y}]`);
  },
});

const slasher = stampit().methods({
  slash(direction) {
    console.log(`${this.name} slashed to the ${direction}`);
  },
});

const shooter = stampit().props({
  bullets: 10,
}).methods({
  shoot(direction) {
    if (this.bullets === 0) {
      console.log(`${this.name} is out of bullets`);
      return;
    }

    console.log(`${this.name} shot to the ${direction}`);
    this.bullets--;
  },
});

const runner = stampit.compose(character, mover);
const samurai = stampit.compose(runner, slasher);
const sniper = stampit.compose(character, shooter);
const gunslinger = stampit.compose(runner, shooter);
const westernSamurai = stampit.compose(samurai, gunslinger);

module.exports = {
  runner,
  samurai,
  sniper,
  gunslinger,
  westernSamurai,
};

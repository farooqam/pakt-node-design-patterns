const Middleware = require('./middleware');
const Calculator = require('./calculator');

const calculator = new Calculator();
const app = new Middleware(calculator);

app.use((req, next) => {
  req.a = req.a * 2;
  next();
});

app.use((req, next) => {
  req.b = req.b * 3;
  next();
});

console.log(app.add({a: 5, b: 10}));
console.log(app.multiply({a: 3, b: 4}));

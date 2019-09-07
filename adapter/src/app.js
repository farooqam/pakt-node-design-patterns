const Db = require('./db');
const {join} = require('path');

const dbFile = join(__dirname, 'dbs.json');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(dbFile);
const dbs = low(adapter);

/* const loki = require('lokijs');
const LokiAdapter = require('./loki-adapter');
// eslint-disable-next-line new-cap
const ldb = new loki(dbFile);
const lokiAdapter = new LokiAdapter(ldb); */

const db = new Db(dbs);

db.init('users');

db.add({
  collection: 'users',
  data: {
    name: 'Farooq',
    age: 42,
  },
});

console.log(db.get('users'));

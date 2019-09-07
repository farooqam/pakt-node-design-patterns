/* eslint-disable require-jsdoc */
let _db;

class Db {
  constructor(db) {
    _db = db;
  };

  init(collection) {
    return _db
        .defaults({[collection]: []})
        .write();
  };

  add({collection, data}) {
    return _db
        .get(collection)
        .push(data)
        .write();
  };

  get(collection) {
    return _db
        .get(collection)
        .value();
  };
}

module.exports = Db;

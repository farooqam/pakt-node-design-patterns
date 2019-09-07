/* eslint-disable require-jsdoc */
let _lokiDb;
let _collection;
let _op;
let _dataToPush;

class LokiAdapter {
  constructor(lokiDb) {
    _lokiDb = lokiDb;
    _collection = null;
    _op = null;
  }

  defaults(obj) {
    _collection = Object.keys(obj)[0];
    _op = 'init';
    return this;
  }

  write() {
    if (_op) {
      switch (_op) {
        case 'init':
          _lokiDb.addCollection(_collection);
          _collection = null;
          _op = null;
          break;
        case 'write':
          _collection.insert(_dataToPush);
          _dataToPush = null;
          _collection = null;
          _op = null;
          break;
      }

      _lokiDb.saveDatabase();
    }

    return this;
  }

  get(collection) {
    _collection = _lokiDb.getCollection(collection);
    return this;
  }

  push(data) {
    _dataToPush = data;
    _op = 'write';
    return this;
  }

  value() {
    return _collection.find();
  }
}

module.exports = LokiAdapter;

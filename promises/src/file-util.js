const {readFile} = require('fs');

const readFileAsyncInternal = (path) => new Promise((resolve, reject) => {
  readFile(path, 'utf8', (error, data) => {
    if (error) return reject(error);
    resolve(data);
  });
});

const readFileAsync = async (path) => await readFileAsyncInternal(path);

module.exports = {
  readFileAsync,
};

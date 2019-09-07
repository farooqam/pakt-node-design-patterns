const {readFileAsync} = require('./file-util');
const {join} = require('path');

const filePath = join(__dirname, 'app.js');

readFileAsync(filePath)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

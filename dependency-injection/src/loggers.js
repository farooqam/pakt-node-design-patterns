const upperCaseLogger = {
  write: (message) => console.log(`${new Date()} : ${message.toUpperCase()}`),
};

const lowerCaseLogger = {
  write: (message) => console.log(`${new Date()} : ${message.toLowerCase()}`),
};

module.exports = {
  upperCaseLogger,
  lowerCaseLogger,
};

const UserBuilder = require('./user-builder');

const userBuilder = new UserBuilder('farooq', 'farooq@foo.com', 42)
    .setInterests(['coding', 'baseball', 'sleeping', 'food'])
    .setNickname('fooq')
    .setPhoto('photo url');

const user = userBuilder.build();

console.log(user);

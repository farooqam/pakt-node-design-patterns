const User = require('./user');

/* eslint-disable require-jsdoc */
class UserBuilder {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  setNickname(nickname) {
    this.nickName = nickname;
    return this;
  }

  setInterests(interests) {
    this.interests = interests;
    return this;
  }

  setPhoto(photo) {
    this.photo = photo;
    return this;
  }

  build() {
    return new User(this);
  }
}

module.exports = UserBuilder;

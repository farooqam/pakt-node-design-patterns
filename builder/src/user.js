/* eslint-disable require-jsdoc */
class User {
  constructor(
      {name,
        email,
        age,
        nickname,
        interests,
        photo}
  ) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.nickname = nickname;
    this.interests = interests;
    this.photo = photo;
  }
}

module.exports = User;

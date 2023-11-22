class UserStorage {
  static #users = {
    id: ["a", "b", "c"],
    password: ["1234", "2345", "3456"],
    name: ["aaaa", "bbbb", "ccccc"],
  };
  static getUsers(...ps) {
    const _users = this.#users;
    const newUsers = ps.reduce((nu, p) => {
      if (_users.hasOwnProperty(p)) {
        nu[p] = _users[p];
      }
      return nu;
    }, {});
    return newUsers;
  }
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((nu, info) => {
      nu[info] = users[info][idx];
      return nu;
    }, {});
    return userInfo;
  }
  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.userid);
    users.name.push(userInfo.username);
    users.password.push(userInfo.userpassword);
    return { success: true };
  }
}

module.exports = UserStorage;

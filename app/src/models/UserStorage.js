// const fs = require("fs").promises;

const db = require("../config/db");

class UserStorage {
  // static #getUsers(data, isAll, ps) {
  //   const users = JSON.parse(data);
  //   if (isAll) {
  //     return users;
  //   }
  //   const newUsers = ps.reduce((nu, p) => {
  //     if (users.hasOwnProperty(p)) {
  //       nu[p] = users[p];
  //     }
  //     return nu;
  //   }, {});
  //   return newUsers;
  // }
  // static #getUserInfo(data, userid) {
  //   const users = JSON.parse(data);
  //   const idx = users.id.indexOf(userid);
  //   const userKeys = Object.keys(users);
  //   const userInfo = userKeys.reduce((nu, info) => {
  //     nu[info] = users[info][idx];
  //     return nu;
  //   }, {});
  //   return userInfo;
  // }
  // static getUsers(isAll, ...ps) {
  //   return fs
  //     .readFile("./src/databases/users.json")
  //     .then((data) => this.#getUsers(data, isAll, ps))
  //     .catch(console.error);
  // }
  static getUserInfo(userid) {
    // return fs
    //   .readFile("./src/databases/users.json")
    //   .then((data) => this.#getUserInfo(data, userid))
    //   .catch(console.error);
    const query = "SELECT * FROM users WHERE id = ?;";
    return new Promise((res, rej) => {
      db.query(query, [userid], (err, data) => {
        if (err) rej(err);
        res(data[0]);
      });
    });
  }
  static async save(userInfo) {
    // const users = await this.getUsers(true);
    // if (users.id.includes(userInfo.userid)) {
    //   throw "아이디 존재";
    // }
    // users.id.push(userInfo.userid);
    // users.name.push(userInfo.username);
    // users.password.push(userInfo.userpassword);
    // fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    // return { success: true };
    
    const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
    return new Promise((res, rej) => {
      db.query(
        query,
        [userInfo.userid, userInfo.username, userInfo.userpassword],
        (err, data) => {
          if (err) rej(`{err}`);
          res({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;

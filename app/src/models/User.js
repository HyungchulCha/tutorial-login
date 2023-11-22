const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  login() {
    const bd = this.body;
    const { id, password } = UserStorage.getUserInfo(bd.userid);
    if (id) {
      if (id === bd.userid && password === bd.userpassword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호 틀림" };
    }
    return { success: false, msg: "존자하지않는 아이디" };
  }
  register() {
    const client = this.body;
    const response = UserStorage.save(client)
    return response
  }
}

module.exports = User;

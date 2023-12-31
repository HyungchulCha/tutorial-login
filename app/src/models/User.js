const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body;
    try {
      const { id, password } = await UserStorage.getUserInfo(client.userid);
      if (id) {
        if (id === client.userid && password === client.userpassword) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호 틀림" };
      }
      return { success: false, msg: "존자하지않는 아이디" };
    } catch (err) {
      return { success: false, err };
    }
  }
  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = User;

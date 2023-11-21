const users = {
  userid: ["a", "b", "c"],
  userpassword: ["1234", "2345", "3456"],
};

const output = {
  home: (req, res) => {
    res.render(`home/index`);
  },
  login: (req, res) => {
    res.render(`home/login`);
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.userid;
    const password = req.body.userpassword;

    if (users.userid.includes(id)) {
      const idx = users.userid.indexOf(id);
      if (users.userpassword[idx] === password) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "login fail",
    });
  },
};

module.exports = { output, process };

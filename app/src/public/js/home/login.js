const userid = document.querySelector("#userid");
const userpassword = document.querySelector("#userpassword");
const loginbutton = document.querySelector("button");

loginbutton.addEventListener("click", fnLogin);

function fnLogin() {
  console.log(userid.value, userpassword.value);
  if (!userid.value) {
    alert("아이디를 입력해주세요");
    return;
  }

  if (!userpassword.value) {
    alert("비밀번호 입력하세요.");
    return;
  }
  const req = {
    userid: userid.value,
    userpassword: userpassword.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((e) => console.error(new Error("Login Error")));
}

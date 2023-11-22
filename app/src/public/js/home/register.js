const userid = document.querySelector("#userid");
const username = document.querySelector("#userid");
const userpassword = document.querySelector("#userpassword");
const confirmPassword = document.querySelector("#confirm-password");
const registerbutton = document.querySelector("button");

registerbutton.addEventListener("click", fnregister);

function fnregister() {
  const req = {
    userid: userid.value,
    username: username.value,
    userpassword: userpassword.value,
  };

  if (!userid.value) {
    alert("아이디를 입력해주세요");
    return;
  }

  if (userpassword.value !== confirmPassword.value) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  console.log(req);
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((e) => console.error(new Error("Login Error")));
}

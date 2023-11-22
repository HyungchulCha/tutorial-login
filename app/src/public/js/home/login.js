const userid = document.querySelector("#userid");
const userpassword = document.querySelector("#userpassword");
const loginbutton = document.querySelector("button");

loginbutton.addEventListener("click", fnLogin);

function fnLogin() {
  const req = {
    userid: userid.value,
    userpassword: userpassword.value,
  };
  console.log(req, JSON.stringify(req));
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
        alert(res.msg);
      }
    })
    .catch((e) => console.error(new Error("Login Error")));
}

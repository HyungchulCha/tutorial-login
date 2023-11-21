const userid = document.querySelector("#userid");
const userpassword = document.querySelector("#userpassword");
const loginbutton = document.querySelector("button");

console.log(userid);

loginbutton.addEventListener("click", fnLogin);

function fnLogin() {
  const req = {
    userid: userid.value,
    userpassword: userpassword.value,
  };
  console.log(req, JSON.stringify(req))
  fetch('/login', {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(req)
  })
};

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
  console.log(req);
};

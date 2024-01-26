window.onload = function () {
  // 1. Eng birinchi elementlarni  id orqali initialize qilib olaman.
  const btnSubmit = document.getElementById("submit");
  const inputUserName = document.getElementById("username");
  const inputPassword = document.getElementById("password");

  let userNameValue = "";
  let userPassword = "";

  console.log(inputUserName, inputPassword);

  // UserName Input
  inputUserName.addEventListener("input", function (event) {
    userNameValue = event.target.value;
  });

  // UserPassword Input
  inputPassword.addEventListener("input", function (event) {
    userPassword = event.target.value;
  });

  // //CheckBox
  // checkbox.addEventListener("click", function (event) {
  //   isChecked = !isChecked;
  // });

  // Submit
  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    if (userNameValue.trim() === "" || userPassword.trim() === "") {
      return alert("Login parol kiritmaysizmi qo`zichoq!!!");
    }
    const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
    console.log(loginInfo);
    //agar loginIOnfo null ga teng bo`lsa alert ko`rsat
    //agar logionInfo bo`lsa check qil va kirit.
    if (!loginInfo) {
      return alert("Foydalanuvchi ro`yhatdan o`tmagan!");
    }
    if (loginInfo.name !== userNameValue) {
      return alert("Saved user name is not correct");
    }
    if (loginInfo.password !== userPassword) {
      return alert("User password is not correct");
    }
    const userInfo = {
      name: userNameValue,
      password: userPassword,
      loggedIn: true,
    };
    console.log(userInfo);
    localStorage.setItem("loginInfo", JSON.stringify(userInfo));
    window.location.replace("/");
  });
};

function goBack() {
  window.location.replace("/");
}

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function goToLogin() {
  console.log("Click");
  window.location.replace("/auth/login.html");
  url = "/" + encodeURIComponent();
  document.location.href = url;
}

function goToRegister() {
  window.location.replace("/auth/register.html");
}

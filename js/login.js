window.onload = async function () {
  console.log("Onclilck");

  // 1. Eng birinchi elementlarni  id orqali initialize qilib olaman.
  const btnSubmit = document.getElementById("submit");
  const inputUserName = document.getElementById("username");
  const inputPassword = document.getElementById("password");
  const checkbox = document.getElementById("check");

  let userNameValue = "";
  let userPassword = "";
  let isChecked = localStorage.getItem("remember") || false;

  console.log(isChecked);

  // UserName Input
  inputUserName.addEventListener("input", function (event) {
    userNameValue = event.target.value;
  });

  // UserPassword Input
  inputPassword.addEventListener("input", function (event) {
    userPassword = event.target.value;
  });

  //CheckBox
  checkbox.addEventListener("click", function (event) {
    isChecked = !isChecked;
    localStorage.setItem("remember", isChecked);
  });

  // Submit
  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    const userInfo = {
      userNameValue, // userNameValue: userNameValue
      //  userPassword, // userPassword: userPassword
    };

    console.log("UserName", userInfo.userNameValue);
    console.log("User Passsword", userInfo.userPassword);
    console.log("UserInfo", userInfo);
    let url = `/?${serialize(userInfo)}`;
    document.location.href = url;
    //  window.location.replace("/", userNameValue);
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

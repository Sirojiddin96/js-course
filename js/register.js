window.onload = async function () {
  let userNameValue = "";
  let userEmailValue = "";
  let userPasswordValue = "";

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const submit = document.getElementById("submit");

  name.addEventListener("input", function (event) {
    userNameValue = event.target.value;
    console.log(event.target.value);
  });

  email.addEventListener("input", function (event) {
    userEmailValue = event.target.value;
  });

  password.addEventListener("input", function (event) {
    userPasswordValue = event.target.value;
  });

  confirmPassword.addEventListener("blur", function (event) {
    if (userPasswordValue !== event.target.value) {
      //   password.style.border = "1px solid red !important";
      return alert("Confirm pass is not correct!!!");
    }
  });

  submit.addEventListener("click", function () {
    // check if inputs are empty
    if (
      userEmailValue.trim() === "" ||
      userPasswordValue.trim() === "" ||
      userNameValue.trim() === ""
    ) {
      alert("Please fill the all inputs");
      return;
    }
    const userInfo = {
      name: userNameValue,
      password: userPasswordValue,
      email: userEmailValue,
      loggedIn: false,
    };
    console.log(userInfo);
    localStorage.setItem("loginInfo", JSON.stringify(userInfo));
    window.location.replace("/");
  });
};

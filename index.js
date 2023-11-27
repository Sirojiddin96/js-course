fetch("./layout/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  })
  .catch((err) => console.log(err));

fetch("./course-list/main-layout.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("main-layout").innerHTML = data;
  })
  .catch((err) => console.log(err));

// fetch("./auth/login.html")
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     document.querySelector("login").innerHTML = data;
//   })
//   .catch((err) => console.log(err));

window.onload = async function () {
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  if (loginInfo === null || !loginInfo.loggedIn) {
    return window.location.replace("/auth/login.html");
  }

  const logoutText = document.getElementById("logout");
  const loginText = document.getElementById("login");

  if (loginInfo !== null) {
    logoutText.style.display = "flex";
    loginText.style.display = "none";
  } else {
    loginText.style.display = "none";
    logoutText.style.display = "flex";
  }

  const keep = localStorage.getItem("remember");
  console.log(keep);
  let initialName = "Welcome";
  const rightContainer = document.getElementById("rightSide");
  var q = document.getElementById("names");
  q.innerHTML = initialName;

  const arr1 = [1, 2, 3, 4, 5, 10, 23]; // array ni yaratdik
  console.log(arr1.length, arr1[5]);
  const newArr = new Array();
  newArr[0] = 1;
  newArr[1] = 3;

  // array doim 0 index dan boshlanadi.
  let names = []; // bo'sh array

  const leftSide = document.getElementById("leftSide");
  const span = document.createElement("span");
  span.id = "emptyArea";
  span.className = "empty-box";
  span.innerHTML = "Ro'yhatga olish boshlanmadi";

  const headerDiv = document.getElementById("userName");
  headerDiv.style.gap = "0.5rem";
  headerDiv.style.display = "flex";

  const userNameValue = loginInfo.name.split(""); //Mirzohid->['M','i',r','z','o','h','i','d']
  console.log(userNameValue);
  for (let i = 0; i < userNameValue.length; i++) {
    const userNames = document.createElement("span");
    userNames.innerHTML = userNameValue[i];
    userNames.id = "userName";
    userNames.style.width = "20px";
    userNames.style.height = "20px";
    userNames.style.display = "flex";
    userNames.style.justifyContent = "center";
    userNames.style.alignItems = "center";

    userNames.style.borderRadius = "50%";
    userNames.style.backgroundColor = "green";

    userNames.className = "users";
    headerDiv.append(userNames);
  }

  // userNames.innerHTML = userNameValue[i];

  for (let index = 0; index < names.length; index++) {
    const btn = document.createElement("button");
    btn.id = "user_" + index;
    btn.className = "btn-name";
    btn.innerHTML = names[index];
    leftSide.append(btn);

    btn.addEventListener("click", function () {
      q.innerHTML = `${initialName} ${names[index]}`;
    });
  }
  const sixSide = [];
  sixSide[0] = "6";
  for (i = 0; i < 0; i++);
  sixSide.append;

  const karra = document.createElement("div");
  const multiple = document.createElement("div");
  const x = document.createElement("span");
  const mulptiplier = document.createElement("div");
  const equal = document.createElement("div");
  const result = document.createElement("div");

  karra.id = "karraLayout";
  karra.className = "karra";

  rightContainer.appendChild(karra);
  const karraLayout = document.getElementById("karraLayout");
  karraLayout.append(multiple);
  karraLayout.append(x);
  karraLayout.append(mulptiplier);
  karraLayout.append(equal);
  karraLayout.append(result);

  multiple.className = "column-container";

  mulptiplier.id = "multiplier-1";
  mulptiplier.className = "column-container";

  x.id = "xId";
  x.className = "column-container";

  equal.id = "equal";
  equal.className = "column-container";

  result.id = "result";
  result.className = "column-container";

  let karraAmount = 9;

  for (let i = 1; i <= 10; i++) {
    const box = document.createElement("span");
    const xx = document.createElement("span");
    const m = document.createElement("span");
    const eq = document.createElement("span");
    const re = document.createElement("span");
    xx.id = "x-" + i;
    box.id = "multiple" + i;
    m.id = "multiplier" + i;
    eq.id = "equal" + i;
    re.id = "re" + i;
    box.innerHTML = karraAmount;
    xx.innerHTML = "x";
    m.innerHTML = i;
    eq.innerHTML = "=";
    re.innerHTML = karraAmount * i;
    result.appendChild(re);
    equal.appendChild(eq);
    mulptiplier.appendChild(m);
    x.appendChild(xx);
    multiple.appendChild(box);
  }

  //  console.log("Hello");

  // [({}, {})]; // array of object

  const users = [
    { name: "Mirzohid", age: "20", hometown: "Namangan", gender: "male" },
    { name: "Sirojiddin", age: "27", hometown: "Seul", gender: "male" },
  ];

  const courseList = [
    {
      courseName: "JavaScript",
      time: "3h",
      price: 200000,
      deadline: "January",
      teacher: "Sirojiddin",
      type: "online",
    },
    {
      courseName: "React Native",
      time: "3h",
      price: 1000000,
      deadline: "February",
      teacher: "Mirzohid",
      type: "online",
    },
    {
      courseName: "JavaScript",
      time: "3h",
      price: 200000,
      deadline: "January",
      teacher: "Sirojiddin",
      type: "online",
    },
    {
      courseName: "React Native",
      time: "3h",
      price: 1000000,
      deadline: "February",
      teacher: "Mirzohid",
      type: "online",
    },
    {
      courseName: "JavaScript",
      time: "3h",
      price: 200000,
      deadline: "January",
      teacher: "Sirojiddin",
      type: "online",
    },
    {
      courseName: "React Native",
      time: "3h",
      price: 1000000,
      deadline: "February",
      teacher: "Mirzohid",
      type: "online",
    },
  ];

  const courseLayout = document.getElementById("courseList");

  for (let i = 0; i < courseList.length; i++) {
    const course = document.createElement("div");
    course.id = "courseId";
    course.className = "course";
    courseLayout.append(course);

    const imageDiv = document.createElement("div");
    imageDiv.className = "image-container";

    const image = document.createElement("img");
    image.src = "/course-list/js.png";
    imageDiv.append(image);
    course.append(imageDiv);

    courseDetail = document.createElement("div");
    courseDetail.className = "course-details";
    courseDetail.id = "courseId";
    course.append(courseDetail);

    const topDiv = document.createElement("div");
    topDiv.className = "top";
    courseDetail.append(topDiv);

    const topLeft = document.createElement("div");
    topLeft.className = "left";
    topDiv.append(topLeft);

    const topButton = document.createElement("Button");
    topButton.textContent = "Buy";
    topLeft.append(topButton);

    const courseSpan = document.createElement("span");
    courseSpan.id = "courseName";
    courseSpan.textContent = courseList[i].courseName;
    topLeft.append(courseSpan);

    const spanCourse = document.createElement("span");
    spanCourse.id = "courseTime";
    spanCourse.textContent = courseList[i].time;
    topLeft.append(spanCourse);

    const topSpan = document.createElement("span");
    topSpan.id = "coursePrice";
    topSpan.textContent = courseList[i].price;
    topLeft.append(topSpan);

    const rightDiv = document.createElement("div");
    rightDiv.className = "right";
    topDiv.append(rightDiv);

    const courseDeadlineSpan = document.createElement("span");
    courseDeadlineSpan.id = "courseDeadline";
    courseDeadlineSpan.textContent = courseList[i].deadline;
    rightDiv.append(courseDeadlineSpan);

    const courseTeacherSpan = document.createElement("span");
    courseTeacherSpan.id = "courseTeacher";
    courseTeacherSpan.textContent = courseList[i].teacher;
    rightDiv.append(courseTeacherSpan);

    const courseTypeSpan = document.createElement("span");
    courseTypeSpan.id = "courseType";
    courseTypeSpan.textContent = courseList[i].type;
    rightDiv.append(courseTypeSpan);

    const bottomSection = document.createElement("div");
    bottomSection.className = "bottom";
    courseDetail.append(bottomSection);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    bottomSection.append(addToCartButton);

    const buttonShare = document.createElement("button");
    buttonShare.textContent = "Share";
    buttonShare.className = "share";
    bottomSection.append(buttonShare);
  }

  const addName = document.getElementById("btn");
  let input = "";
  const message = document.querySelector("#inputName");
  message.addEventListener("input", function (event) {
    input = event.target.value;
  });

  addName.addEventListener("click", function () {
    names = [];
    let l = initialName + " " + input;
    q.innerHTML = l;
    names.push(input);

    if (names.length > 0) {
      span.innerHTML = "";
    }

    for (let index = 0; index < names.length; index++) {
      const btn = document.createElement("button");
      btn.id = "user_" + index;
      btn.className = "btn-name";
      btn.innerHTML = names[index];
      leftSide.append(btn);

      btn.addEventListener("click", function () {
        q.innerHTML = `${initialName} ${names[index]}`;
      });
    }
    if (names.length === 0) {
      leftSide.append(span);
      leftSide.className = "empty-left";
      return;
    } else {
      leftSide.className = "left-side";
    }
  });
  if (names.length === 0) {
    leftSide.append(span);
    leftSide.className = "empty-left";
    return;
  }

  carObj.isUsed = true;
  const values = Object.values(carObj);
  console.log(values);

  const carValues = document.createElement("span");

  carValues.innerHTML = values;
  karraLayout.append(carValues);

  const entry = document.createElement("span");
  const entries = Object.entries(carObj);
  entry.innerHTML = entries;
  karraLayout.append(entry);

  const mainLayout = document.getElementById("main-layout");

  mainLayout.addEventListener("scroll", function (event) {
    console.log(event);
  });
};

function addName(name) {
  var q = document.getElementById("names");
  initialName = name;
  q.innerHTML = initialName;
}

function clearName() {
  var q = document.getElementById("names");
  q.innerHTML = "Welcome";
}

function goToLogin() {
  console.log("Click");
  window.location.replace("/auth/login.html");
}

function goToTodoPage() {
  window.location.replace("/features/todo.html");
}

function logout() {
  const getUserInfo = localStorage.getItem("loginInfo");
  const userInfo = {
    name: getUserInfo.userNameValue,
    password: getUserInfo.userPasswordValue,
    email: getUserInfo.userEmailValue,
    loggedIn: false,
  };
  localStorage.setItem("loginInfo", userInfo);
  window.location.replace("/auth/login");
}

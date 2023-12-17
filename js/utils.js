window.onload = async function () {
  const url = new URL(window.location.href);
  const userInfo = {
    username: url.searchParams.get("userNameValue"),
  };
  console.log(userInfo);

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

  const numbersContainer = document.createElement("div");
  numbersContainer.style.display = "flex";
  numbersContainer.style.flexDirection = "row";
  numbersContainer.style.gap = "1rem";
  for (let i = 0; i < 6; i++) {
    const num = document.createElement("input");
    num.id = "inputId" + i;
    num.style.width = "50px";
    num.style.height = "50px";
    num.style.display = "flex";
    num.style.fontSize = "2rem";
    num.style.justifyContent = "center";
    num.style.alignItems = "center";
    num.style.textAlign = "center";
    num.style.backgroundColor = "yellow";
    num.style.borderRadius = "30%";
    numbersContainer.append(num);
    num.innerHTML = "";
  }

  karraLayout.append(numbersContainer);
  const inputId = document.getElementById("inputId0");
  inputId.addEventListener("input", function (e) {
    let inputValue = e.target.value.split("");
    inputValue.forEach((num, idx) => {
      document.getElementById(`inputId${idx}`).value = num;
    });
  });

  const course = [
    {
      id: "1",
      name: "Javascripti",
      length: "3h 26mins",
      price: "200.000",
      startDate: "2023.11.17",
      student: "Sirojiddin",
      type: "online",
      img: "/course-list/js.png",
    },
    {
      id: "2",
      name: "Javascripti",
      length: "3h 26mins",
      price: "200.000",
      startDate: "2023.11.17",
      student: "Sirojiddin",
      type: "online",
      img: "/course-list/js.png",
    },
    {
      id: "3",
      name: "Javascripti",
      length: "3h 26mins",
      price: "200.000",
      startDate: "2023.11.17",
      student: "Sirojiddin",
      type: "online",
      img: "/course-list/js.png",
    },
    {
      id: "3",
      name: "Javascripti",
      length: "3h 26mins",
      price: "200.000",
      startDate: "2023.11.17",
      student: "Sirojiddin",
      type: "online",
      img: "/course-list/js.png",
    },
    {
      id: "4",
      name: "Javascripti",
      length: "3h 26mins",
      price: "200.000",
      startDate: "2023.11.17",
      student: "Sirojiddin",
      type: "online",
      img: "/course-list/js.png",
    },
  ];

  const courseLayout = document.getElementById("courseLayout");
  for (let i = 0; i < course.length; i++) {
    // Big Container
    const courseElement = document.createElement("div");
    const courseDetails = document.createElement("div");
    const imageContainer = document.createElement("div");
    const img = document.createElement("img");

    courseElement.className = "course";
    imageContainer.className = "image-container";
    courseElement.id = "course";
    courseDetails.id = "courseDetail";
    courseDetails.className = "course-details";
    courseLayout.append(courseElement);
    courseElement.append(imageContainer);
    courseElement.append(courseDetails);

    imageContainer.append(img);
    img.src = course[i].img;
    //Inner container
    const top = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const bottom = document.createElement("div");

    top.id = "top";
    left.id = "left";
    right.id = "left";
    bottom.id = "bottom";

    top.className = "top";
    left.className = "left";
    right.className = "right";
    bottom.className = "bottom";

    courseDetails.append(top);
    courseDetails.append(bottom);
    top.append(left);
    top.append(right);

    // Buttons
    const buyBtn = document.createElement("button");
    buyBtn.innerHTML = "Buy";
    const addToCart = document.createElement("button");
    addToCart.innerHTML = "Add To Cart";
    const share = document.createElement("button");
    share.innerHTML = "Share";
    share.className = "share";

    // top.append(buyBtn);
    bottom.append(addToCart);
    bottom.append(share);

    courseElement.className = "course";
    courseLayout.append(courseElement);

    // Left values
    const name = document.createElement("span");
    const time = document.createElement("span");
    const price = document.createElement("span");

    // Right values
    const startDate = document.createElement("span");
    const student = document.createElement("span");
    const type = document.createElement("span");

    name.innerHTML = course[i].name;
    time.innerHTML = course[i].length;
    price.innerHTML = course[i].price;

    startDate.innerHTML = course[i].startDate;
    student.innerHTML = course[i].student;
    type.innerHTML = course[i].type;

    left.append(buyBtn);
    left.append(name);
    left.append(time);
    left.append(price);

    right.append(startDate);
    right.append(student);
    right.append(type);
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

function goToTodo() {
  window.location.replace("/features/todo.html");
}

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

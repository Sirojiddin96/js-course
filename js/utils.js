window.onload = async function () {
  // document.getElementById() code here
  let initialName = "Welcome";
  const rightContainer = document.getElementById("rightSide");
  var q = document.getElementById("names");
  q.innerHTML = initialName;

  const arr1 = [1, 2, 3, 4, 5, 10, 23]; // array ni yaratdik
  console.log(arr1.length, arr1[5]);
  const newArr = new Array();
  newArr[0] = 1;
  newArr[1] = 3;
  console.log(newArr);

  // array doim 0 index dan boshlanadi.
  const names = []; // bo'sh array
  names[0] = "Abdulla";
  names[1] = "Mirzohid";
  names[2] = "Sirojiddin";
  names[3] = "Odilxon";
  names[4] = "Jahongir";
  names[5] = "John";
  names[6] = "Sejong";

  const leftSide = document.getElementById("leftSide");
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

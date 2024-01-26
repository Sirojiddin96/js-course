const firstNum = document.getElementById("num1");
const thesecondNum = document.getElementById("num2");
const res = document.getElementById("result");

const add = document.getElementById("add");
const minus = document.getElementById("sub");
const multiply = document.getElementById("mul");
const sub = document.getElementById("div");
const clean = document.getElementById("clean");

add.addEventListener("click", function () {
  res.value = parseInt(firstNum.value) + parseInt(thesecondNum.value);
});

minus.addEventListener("click", function () {
  res.value = parseInt(firstNum.value) - parseInt(thesecondNum.value);
});

multiply.addEventListener("click", function () {
  res.value = parseInt(firstNum.value) * parseInt(thesecondNum.value);
});

sub.addEventListener("click", function () {
  res.value = parseInt(firstNum.value) / parseInt(thesecondNum.value);
});

clean.addEventListener("click", function () {
  firstNum.value = "";
  thesecondNum.value = "";
  res.value = "";
});

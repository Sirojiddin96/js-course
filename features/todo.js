// set Global variables
let todoList = JSON.parse(localStorage.getItem("onTodoList")) || [];

let currentDate = new Date(new Date()).setHours(0, 0, 0, 0);

window.onload = function () {
  let todoInput = "";
  let deadlineInput = "";

  let input = document.getElementById("todoInput");
  let deadline = document.getElementById("deadline");

  input.addEventListener("input", function (event) {
    todoInput = event.target.value;
  });

  deadline.addEventListener("input", function (event) {
    deadlineInput = event.target.value;
  });

  // if (!isDone) {
  // }

  const { progressList, completedList, missedList, extendedList } =
    filterTodoList(todoList);
  initializeDOM(progressList, completedList, missedList, extendedList);

  const addTodoList = document.getElementById("addTodo");

  addTodoList.addEventListener("click", function () {
    if (todoInput.trim() === "" || deadlineInput.trim() === "") {
      alert("Please fill in input");
      return;
    }
    const todo = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      content: todoInput,
      deadline: deadlineInput,
      isDone: false,
      isExtended: false,
    };
    todoList.push(todo);
    localStorage.setItem("onTodoList", JSON.stringify(todoList));

    const { progressList, completedList, missedList, extendedList } =
      filterTodoList(todoList);
    initializeDOM(progressList, completedList, missedList, extendedList);
    deadline.value = "";
    input.value = "";
    const backdrop = document.getElementById("backdrop");
    backdrop.style.display = "none";
  });
};

function makeUpdateIntoTodoList(checkbox, todoId) {
  let isDone;
  checkbox.addEventListener("input", function (event) {
    isDone = event.target.checked;
    let todoIndex = todoList.findIndex((todo) => todo.id === todoId);
    todoList[todoIndex].isDone = isDone;
    localStorage.setItem("onTodoList", JSON.stringify(todoList));

    todoELement = document.getElementById(todoIndex);
    if (todoELement) {
      todoELement.remove();
    }

    // 3 xil // start
    // 1 OnProgress
    const { progressList, completedList, missedList, extendedList } =
      filterTodoList(todoList);
    initializeDOM(progressList, completedList, missedList, extendedList);
  });
}
function filterTodoList(todoList) {
  const progressList = todoList.filter(
    (todo) =>
      !todo.isDone &&
      currentDate < formatDeadline(todo.deadline) &&
      !todo.isExtended
  );
  const completedList = todoList.filter((todo) => todo.isDone);

  const missedList = todoList.filter(
    (todo) => currentDate > formatDeadline(todo.deadline) && !todo.isDone
  );
  const extendedList = todoList.filter(
    (todo) => todo.isExtended && currentDate < formatDeadline(todo.deadline)
  );

  const totalTodoCount = document.getElementById("totalTodoCount");
  totalTodoCount.textContent = todoList.length;

  const completedTodoCount = document.getElementById("completedTaskCount");
  completedTodoCount.textContent = completedList.length;

  const missedTodoCount = document.getElementById("missedTaskCount");
  missedTodoCount.textContent = missedList.length;

  const progressWidth = findNumberPercent(todoList.length, progressList.length); // onProgress
  const completedWidth = findNumberPercent(
    todoList.length,
    completedList.length
  ); //completed
  const missedWidth = findNumberPercent(todoList.length, missedList.length); //missed

  modifyLayoutStyle(completedWidth, "completedTodolist", "#59cd68");
  modifyLayoutStyle(missedWidth, "missedTodolist", "#ff0000");

  return {
    progressList,
    completedList,
    missedList,
    extendedList,
  };
}

function modifyLayoutStyle(width, elementId, bgColor) {
  const element = document.getElementById(elementId);
  element.style.width = width + "%";
  element.style.backgroundColor = width > 0 ? bgColor : null;
}

function openTodoModal() {
  const backdrop = document.getElementById("backdrop");
  backdrop.style.display = "flex";
}
function closeTodoModal() {
  const backdrop = document.getElementById("backdrop");
  backdrop.style.display = "none";
}
const findNumberPercent = (a, b) => {
  return (b * 100) / a;
};

const sum = findNumberPercent(5, 2);
console.log(sum);

// // 1. Homework, complete function.
// function filterTodoList(todoList) {
//   return {
//     progressTodoList: [],
//     completedTodoList: [],
//     missedTodoList: [],
//   };
// }

// // Learn object destructions
// // take an example from this function for 1st homework
// function sample() {
//   return {
//     num1,
//     num2,
//     num3,
//   };
// }

// const { num1, num2, num3 } = sample();

// // 2. make font-size 0.7rem

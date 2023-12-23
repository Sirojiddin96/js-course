let progressTodoList = [];
let completedTodoList = [];
let missedTodoList = [];
let extendedTodoList = [];
let todoList = [];
let currentDate = new Date(new Date()).setHours(0, 0, 0, 0);
window.onload = function () {
  let todoInput = "";
  let deadlineInput = "";

  const input = document.getElementById("todoInput");
  const deadline = document.getElementById("deadline");

  input.addEventListener("input", function (event) {
    todoInput = event.target.value;
  });

  deadline.addEventListener("input", function (event) {
    deadlineInput = event.target.value;
  });

  const { progressList, completedList, missedList, extendedList } =
    filterTodoList(todoList);
  todoCountDOM(completedList, missedList, extendedList, todoList);
  initializeDOM(progressList, completedList, missedList, extendedTodoList);

  const addTodoList = document.getElementById("addTodo");
  addTodoList.addEventListener("click", function (event) {
    if (todoInput.trim() === "") {
      event.preventDefault();
      return alert("Please fill both input");
    }
    const newTodoList = [];
    const todo = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      content: todoInput,
      deadline: deadlineInput === "" ? formatDate() : deadlineInput,
      isDone: false,
      isExtended: false,
    };
    newTodoList.push(todo);
    todoList = [
      ...progressTodoList,
      ...newTodoList,
      ...completedTodoList,
      ...missedTodoList,
    ];

    const { progressList, completedList, missedList, extendedList } =
      filterTodoList(todoList);
    initializeDOM(progressList, completedList, missedList, extendedList);
    clearInput();
    backdrop.style.display = "none";
  });
};

function makeUpdateInTodoList(checkbox, todoId) {
  let isDone;
  checkbox.addEventListener("input", async function (event) {
    isDone = event.target.checked;
    let todoIndex = todoList.findIndex((todo) => todo.id === todoId);
    todoList[todoIndex].isDone = isDone;
    todoList[todoIndex].isExtended = false;
    const todoElement = document.getElementById(todoIndex);
    if (todoElement) {
      todoElement.remove();
    }
    const { progressList, completedList, missedList, extendedList } =
      filterTodoList(todoList);
    await initializeDOM(progressList, completedList, missedList, extendedList);
  });
}

function filterTodoList(todoList) {
  // 3 xil
  // 1 Completed
  completedTodoList = todoList.filter((todo) => {
    return todo.isDone;
  });
  completedTaskCount.textContent = completedTodoList.length;

  // 2 OnProgress
  progressTodoList = todoList.filter(function (todo) {
    return (
      todo.isDone === false &&
      !todo.isExtended &&
      currentDate < formatDeadline(todo.deadline)
    );
  });
  totalTodoCount.textContent = progressTodoList.length;

  // 3 Missed
  missedTodoList = todoList.filter(
    (todo) => currentDate > formatDeadline(todo.deadline) && !todo.isDone
  );
  missedTaskCount.textContent = missedTodoList.length;

  //3 Extended
  extendedTodoList = todoList.filter((todo) => todo.isExtended && !todo.isDone);
  extendedTodoCount.textContent = extendedTodoList.length;

  todoCountDOM(completedTodoList, missedTodoList, extendedTodoList, todoList);
  return {
    progressList: progressTodoList,
    completedList: completedTodoList,
    missedList: missedTodoList,
    extendedList: extendedTodoList,
  };
}

function openCreateTodoForm() {
  const backdrop = document.getElementById("backdrop");
  backdrop.style.display = "flex";
}

function closeCreateTodoForm() {
  const backdrop = document.getElementById("backdrop");
  backdrop.style.display = "none";
}

function goToHome() {
  window.location.replace("/");
}

function clearInput() {
  const input = document.getElementById("todoInput");
  let empty = "";
  input.value = empty;

  const deadline = document.getElementById("deadline");
  deadline.value = empty;
}

function formatDate() {
  const date = new Date(); // Create a new Date object

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate() + 2).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

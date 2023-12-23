// Todo Layouts
const onProgressTodoLayout = document.getElementById("onProgressList");
const onCompletedTodoLayout = document.getElementById("completedTasks");
const onMissedTodoLayout = document.getElementById("missedTasks");
const onExtendedTodoLayout = document.getElementById("extendedTasks");

//Todo Result Count
const completedTitle = document.getElementById("completedTitle");
const completed = document.getElementById("completedTodoList");

const missedTitle = document.getElementById("missedTodoListTitle");
const missed = document.getElementById("missedTodoList");

const extended = document.getElementById("extendedTodoList");
const extendedTitle = document.getElementById("extendedTodoTitle");

const completedBackgroundColor =
  "linear-gradient(to right, rgba(10, 107, 33, 0), rgb(136, 255, 89))";
const missedBackgroundColor =
  "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))";

const extendedBackgroundColor =
  "linear-gradient(to right, rgba(255,0,0,0), rgb(208, 112, 0))";

// To dos count
const totalTodoCount = document.getElementById("totalTodoCount");
const completedTaskCount = document.getElementById("completedTaskCount");
const missedTaskCount = document.getElementById("missedTaskCount");
const extendedTodoCount = document.getElementById("extendedTodoCount");

// Format Date to datetime-local
function formatDeadline(deadline) {
  return new Date(deadline).setHours(0, 0, 0, 0);
}

let checkbox;
// Create A DOM
async function createTodo(
  todoList,
  className,
  todoId,
  checkboxClassName,
  disabled,
  todoTextClassName,
  layout,
  isCompleted,
  hideCheckbox = "",
  type
) {
  for (let i = 0; i < todoList.length; i++) {
    const progressDiv = document.createElement("div");
    progressDiv.className = `completed-todo-list ${className}`;
    progressDiv.id = `${type}${i}`;

    // Todo Deadline
    const input = document.createElement("input");
    input.type = "datetime-local";
    input.id = `deadline-${type}-${i}`;
    input.disabled = disabled;
    input.value = todoList[i].deadline;

    const onProgressCheckbox = document.createElement("div");
    onProgressCheckbox.className = `todo-create-form ${checkboxClassName}`;

    const label = document.createElement("label");
    label.className = `container ${hideCheckbox}`;

    // Todo Checkbox
    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-${type}-${i}`;
    if (isCompleted) {
      checkbox.disabled = true;
      checkbox.checked = true;
    }

    const checkMark = document.createElement("span");
    checkMark.className = "check-mark";

    //Todo Content
    const content = document.createElement("div");
    content.className = `completed-todo-text ${todoTextClassName}`;
    content.id = `content-${i}`;
    content.textContent = todoList[i].content;

    //Appending checkbox and content
    onProgressCheckbox.append(label);
    onProgressCheckbox.append(content);

    label.append(checkbox);
    label.append(checkMark);

    layout.append(progressDiv);
    progressDiv.append(input);
    progressDiv.append(onProgressCheckbox);
    makeUpdateInTodoList(checkbox, todoList[i].id);
  }
}

// Initialize and Update DOM
async function initializeDOM(
  progressTodoList,
  completedTodoList,
  missedTodoList,
  extendedTodoList
) {
  removeAllChildren(onCompletedTodoLayout);
  removeAllChildren(onProgressTodoLayout);
  removeAllChildren(onMissedTodoLayout);
  removeAllChildren(onExtendedTodoLayout);
  if (completedTodoList.length === 0) {
    emptyLayout();
  } else {
    createTodo(
      completedTodoList,
      "",
      "onCompleted",
      "",
      false,
      "",
      onCompletedTodoLayout,
      true,
      "",
      "completed-todo"
    );
    const empty = document.getElementById("emptyOnCompletedTaskId");
    if (empty) {
      empty.remove();
    }
  }
  if (progressTodoList.length === 0) {
    emptyLayout(
      "todo-on-progress",
      "emptyOnProgressTodo",
      "No Task Yet" + "😂😊",
      onProgressTodoLayout
    );
  } else {
    createTodo(
      progressTodoList,
      "todo-on-progress",
      `todo-on-progress`,
      "on-progress-checkbox",
      false,
      "on-progress-text",
      onProgressTodoLayout,
      false,
      "",
      "todo-on-progress"
    );
  }
  if (extendedTodoList.length === 0) {
    emptyLayout(
      "todo-extended",
      "emptyOnExtendedTodo",
      "No Task Yet" + "😂😊",
      onExtendedTodoLayout
    );
  } else {
    createTodo(
      extendedTodoList,
      "todo-extended",
      `todo-extended`,
      "todo-extended-checkbox",
      false,
      "todo-extended-text",
      onExtendedTodoLayout,
      false,
      "",
      "todo-extended"
    );
  }
  if (missedTodoList.length === 0) {
    emptyLayout(
      "todo-not-finished",
      "emptyOnMissedTodo",
      "No Task Yet" + "😂😊",
      onMissedTodoLayout
    );
  } else {
    createTodo(
      missedTodoList,
      "todo-not-finished",
      "onMissed",
      "",
      false,
      "todo-not-finished-text",
      onMissedTodoLayout,
      false,
      "hide-checkbox",
      "todo-not-finished"
    );
  }
}

function emptyLayout(
  className = "completed-todo-list",
  id = "emptyOnCompletedTodo",
  textContent = "No Task Yet" + "😂😊",
  layout = onCompletedTodoLayout
) {
  const emptyContainer = document.createElement("div");
  emptyContainer.className = `completed-todo-list ${className}`;
  emptyContainer.id = id;
  emptyContainer.textContent = textContent;
  layout.append(emptyContainer);
}

// remove all child except first one
function removeAllChildren(layout) {
  while (layout.children.length > 1) {
    layout.removeChild(layout.lastElementChild);
  }
}

// Result UI Update
function todoCountDOM(completedTasks, missedTasks, extendedTodoList, todoList) {
  completedTaskCount.textContent = completedTasks.length;
  getComputedStyle(
    completed,
    completedBackgroundColor,
    completedTitle,
    "red",
    completedTasks.length,
    todoList.length
  );
  getComputedStyle(
    missed,
    missedBackgroundColor,
    missedTitle,
    "red",
    missedTasks.length,
    todoList.length
  );
  getComputedStyle(
    extended,
    extendedBackgroundColor,
    extendedTitle,
    "#983d09",
    extendedTodoList.length,
    todoList.length
  );
}

// Custom style for  Result UI
function getComputedStyle(
  elementId,
  backgroundColor,
  title,
  titleColor,
  todoList,
  allTodoList
) {
  title.style.color = titleColor;
  let extendedTodoWidth = (todoList * 100) / allTodoList;
  elementId.style.width = extendedTodoWidth + "%";

  elementId.style.backgroundImage = todoList > 0 ? backgroundColor : "none";
}

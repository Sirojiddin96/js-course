// formatDeadline
const onProgressTodoayout = document.getElementById("onProgressList");
const onCompletedTodoLayout = document.getElementById("completedTask");
const onMissedTodoLayout = document.getElementById("missedTask");
const onExtendedTodoLayout = document.getElementById("extendedTask");

function formatDeadline(deadline) {
  return new Date(deadline).setHours(0, 0, 0, 0);
}

function emptyLayout(className, emptyLayoutId, layout = onCompletedTodoLayout) {
  const emptyContainer = document.createElement("div");
  emptyContainer.className = `completed-todo-list ${className}`;
  emptyContainer.id = emptyLayoutId;
  emptyContainer.innerHTML = "No Task Yet" + "😊";
  layout.append(emptyContainer);
}

function removeAllChildren(layout) {
  while (layout.children.length > 1) {
    layout.removeChild(layout.lastElementChild);
  }
}

function initializeDOM(
  onProgressTodos,
  onCompletedTodos,
  missedTodos,
  extendedTodos
) {
  removeAllChildren(onProgressTodoayout);
  removeAllChildren(onCompletedTodoLayout);
  removeAllChildren(onMissedTodoLayout);
  removeAllChildren(onExtendedTodoLayout);
  if (onProgressTodos.length === 0) {
    emptyLayout("todo-on-progress", "emptyOnProgressTodo", onProgressTodoayout);
  } else {
    createTodo(
      onProgressTodos,
      "todo-on-progress",
      "onProgress",
      "on-progress-checkbox",
      false,
      "on-progress-text",
      false,
      onProgressTodoayout,
      true
    );
  }
  if (onCompletedTodos.length === 0) {
    emptyLayout("", "emptyCompletedTodo");
  } else {
    createTodo(
      onCompletedTodos,
      "",
      "onCompleted",
      "",
      true,
      "",
      true,
      onCompletedTodoLayout
    );
  }
  if (missedTodos.length === 0) {
    emptyLayout("todo-not-finished", "emptyOnMissedTodo", onMissedTodoLayout);
  } else {
    createTodo(
      missedTodos,
      "todo-not-finished",
      "onMissed",
      "",
      true,
      "todo-not-finished-text",
      true,
      onMissedTodoLayout
    );
  }
  if (extendedTodos.length === 0) {
    emptyLayout("todo-extended", "emptyOnExtendedTodo", onExtendedTodoLayout);
  } else {
    createTodo(
      extendedTodos,
      "todo-extended",
      "emptyOnExtendedTodo",
      "",
      true,
      "extended-todo-text",
      true,
      onExtendedTodoLayout,
      true
    );
  }
}

function createTodo( // util function
  todos,
  className,
  todoId,
  checkboxClassName,
  disabled,
  todoTextClassName,
  isDisabled = true,
  layout,
  isCheckboxVisible = false
) {
  for (let i = 0; i < todos.length; i++) {
    const progressDiv = document.createElement("div");
    progressDiv.className = `completed-todo-list ${className}`;
    progressDiv.id = todoId;

    // Todo Deadline
    const input = document.createElement("input");
    input.type = "datetime-local";
    input.id = "deadline" + i;
    input.disabled = disabled;
    input.value = todos[i].deadline;

    const onProgressCheckbox = document.createElement("div");
    onProgressCheckbox.className = `todo-create-form ${checkboxClassName}`;

    const label = document.createElement("label");
    label.className = "container";

    // Todo Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "onProgressCheckbox" + i;

    if (isDisabled) {
      checkbox.disabled = false;
    }

    const checkmark = document.createElement("span");
    checkmark.className = "checkmark";

    //Todo Content
    const content = document.createElement("div");
    content.className = `completed-todo-text ${todoTextClassName}`;
    content.id = `content-${i}`;
    content.innerHTML = todos[i].content;

    if (isCheckboxVisible) {
      onProgressCheckbox.append(label);
    }
    onProgressCheckbox.append(content);

    label.append(checkbox);
    label.append(checkmark);

    layout.append(progressDiv);
    progressDiv.append(input);
    progressDiv.append(onProgressCheckbox);
    makeUpdateIntoTodoList(checkbox, todos[i].id);
  }
}
function goToTodoPage() {
  window.location.replace("/");
}

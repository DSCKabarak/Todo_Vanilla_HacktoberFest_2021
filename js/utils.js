// Utils
function createTask(new_task) {
  // Create Elements
  const task_item = document.createElement("div");
  const task_text = document.createElement("span");
  const edit_task = document.createElement("button");
  const delete_task = document.createElement("button");
  // Assign ClassNames
  task_item.className = "task_item";
  task_text.className = "task_text";
  edit_task.className = "edit_task";
  delete_task.className = "delete_task";
  // Set Elements Content
  edit_task.textContent = "Edit";
  delete_task.textContent = "Delete";
  task_text.textContent = new_task ?? "Error 💀 Unable to Create Task :34j3";

  // Tidy up Task Element
  task_item.appendChild(task_text);
  task_item.appendChild(edit_task);
  task_item.appendChild(delete_task);
  // Append Task Element to Dom
  task_pane.appendChild(task_item);

  //   //   Delete Task
  delete_task.addEventListener("click", () => {
    task_pane.removeChild(task_item);
  });
  //   Item State
  edit_task.addEventListener("click", () => {
    if (edit_task.textContent === "Edit") {
      task_item.style.border = "0.2rem solid var(--tk-active)";
      task_text.setAttribute("contenteditable", "true");
      edit_task.textContent = "Save";
    } else if (edit_task.textContent === "Save") {
      task_item.style.border = "none";
      task_text.setAttribute("contenteditable", "false");
      edit_task.textContent = "Edit";
    }
  });
}

function warning_box(message) {
  const alert_box = document.createElement("div");
  alert_box.className = "warning";
  const span = document.createElement("span");
  span.textContent = message ?? "Error Ocurred 🐱‍💻";
  const close = document.createElement("div");
  alert_box.appendChild(span);
  alert_box.appendChild(close);
  error_pane.appendChild(alert_box);

  close.addEventListener("click", () => {
    error_pane.removeChild(alert_box);
  });
  setTimeout(() => {
    error_pane.removeChild(alert_box);
  }, 2000);
}

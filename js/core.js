// Dom references
const add_task_textBox = document.querySelector("#add_task_textBox");
const add_task = document.querySelector("#add_task");
const error_pane = document.querySelector(".error_pane");
const task_pane = document.querySelector(".task_list");

add_task.addEventListener("click", () => {
  // Fetching Text from Input
  let task = add_task_textBox.value;

  //   Text validation
  if (task.length === 0 || task === null || undefined) {
    warning_box("Please create a new task 🎰💀 ::Err8s3");
  } else {
    createTask(task);
  }
  //   Reset Add text Input
  add_task_textBox.value = "";
});

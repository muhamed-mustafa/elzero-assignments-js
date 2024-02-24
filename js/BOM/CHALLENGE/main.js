function generateMongoId() {
  let timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
}

const tasks = document.querySelector(".tasks");
const input = document.querySelector(".input");
const btn = document.querySelector(".add");

function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem("tasks");

  return tasks ? JSON.parse(tasks) : [];
}

function saveTaskToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  tasks.innerHTML = "";

  const existingTasks = getTasksFromLocalStorage();

  existingTasks.forEach((task) => {
    const taskElement = document.createElement("div");

    taskElement.style.margin = "29px";

    taskElement.textContent = task.name;

    const deleteButton = document.createElement("button");

    deleteButton.style.cssText = `
        background-color: #dc3545;
        color: #fff;
        border: none;
        height: 25px;
        float: right;
        border-radius: 5px;
        cursor: pointer;
        margin : 10px
      `;

    deleteButton.textContent = "Delete";

    deleteButton.onclick = () => deleteTask(task.id);

    taskElement.appendChild(deleteButton);

    tasks.appendChild(taskElement);
  });
}

function addTask() {
  const name = input.value.trim();

  if (name) {
    const tasks = getTasksFromLocalStorage();

    const task = { id: generateMongoId(), name };

    tasks.push(task);

    saveTaskToLocalStorage(tasks);

    displayTasks();

    input.value = "";
  }
}

function deleteTask(id) {
  let tasks = getTasksFromLocalStorage();

  tasks = tasks.filter((task) => task.id !== id);

  saveTaskToLocalStorage(tasks);

  displayTasks();
}

window.onload = () => {
  displayTasks();
};

btn.addEventListener("click", addTask);

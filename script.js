
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {

    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <div class="task-buttons">
        <button onclick="editTask(${index})">Edit</button>
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    taskList.appendChild(li);

  });
}

// add task from input
function addTask(){

  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if(task === ""){
    alert("Please enter a task");
    return;
  }

  tasks.push(task);

  saveTasks();
  renderTasks();
alert("Task added successfully!");
  input.value = "";
}

// delete task by index
function deleteTask(index){

  tasks.splice(index,1);

  saveTasks();
  renderTasks();

}

// edit task by index
function editTask(index){

  const newTask = prompt("Edit task:", tasks[index]);

  if(newTask !== null && newTask.trim() !== ""){
    tasks[index] = newTask;

    saveTasks();
    renderTasks();
  }

}

renderTasks();
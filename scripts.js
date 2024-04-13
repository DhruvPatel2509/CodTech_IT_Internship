// DOM elements
const taskInput = document.getElementById("task-input");  // Get reference to the task input element
const addTaskButton = document.getElementById("add-task");  // Get reference to the add task button element
const tasksContainer = document.querySelector(".tasks");  // Get reference to the tasks container element

// Create a new task element
function createTaskElement(task) {
  const taskDiv = document.createElement("div");  // Create a new <div> element
  taskDiv.classList.add("task");  // Add "task" class to the <div> element
  taskDiv.innerHTML = `<div>${task}</div><button class="delete-task">Delete</button>`;  // Set inner HTML of the <div> element to include task content and a delete button
  return taskDiv;  // Return the created task <div> element
}

// Add a task to the list
function addTask(task) {
  tasksContainer.appendChild(createTaskElement(task));  // Append a new task element to the tasks container
  saveTasksToLocalStorage();  // Save tasks to local storage
}

// Delete a task from the list
function deleteTask(taskElement) {
  taskElement.remove();  // Remove the specified task element from the DOM
  saveTasksToLocalStorage();  // Save tasks to local storage
}

// Save tasks to local storage
function saveTasksToLocalStorage() {
  // Extract text content of task elements and save them as JSON in local storage
  const tasks = Array.from(tasksContainer.querySelectorAll(".task > div")).map(task => task.textContent);
  localStorage.setItem("tasks", JSON.stringify(tasks));  // Save tasks as JSON string in local storage
}

// Load tasks from local storage
function loadTasksFromLocalStorage() {
  // Retrieve tasks from local storage or initialize an empty array if not found
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(addTask);  // Add each task from local storage to the tasks list
}

// Add task button click event
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();  // Get the trimmed value of the task input
  if (!taskText) {  // Check if task text is empty
    alert("Please enter a task!");  // Display an alert if task text is empty
    return;  // Exit the function
  }
  addTask(taskText);  // Add the task to the tasks list
  taskInput.value = "";  // Clear the task input field
});

// Delete task button click event
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-task")) {  // Check if clicked element has "delete-task" class
    deleteTask(event.target.parentElement);  // Delete the parent task element
  }
});

// Save tasks before unloading the window
window.addEventListener("beforeunload", saveTasksToLocalStorage);  // Save tasks to local storage before the window unloads

// Load tasks from local storage when the page is loaded
document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);  // Load tasks from local storage when the DOM content is loaded

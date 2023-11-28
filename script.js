// Function to add a new task to the list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    // Create new list item
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      <button class="complete-btn" onclick="completeTask(this)">Complete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// Function to handle 'Enter' key press for adding task
document.getElementById("taskInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Function to delete a task
function deleteTask(btn) {
  const taskItem = btn.parentElement;
  taskItem.remove();
}

// Function to mark a task as complete
function completeTask(btn) {
  const taskText = btn.parentElement.querySelector('span');
  taskText.style.textDecoration = "line-through";
  taskText.style.color = "#00cc00"; // Set text color to green
  btn.classList.add('completed');
  btn.disabled = true;

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskCounter = document.getElementById("task-counter"); // Optional: add <div id="task-counter"></div> in HTML

// Add Task Function
function addTask() {
    const task = inputBox.value.trim(); // Prevent only spaces
    
    if (task === '') {
        alert('⚠️ Please enter a task!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = task;

        // Delete Button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Append to List
        listContainer.appendChild(li);
    }

    inputBox.value = "";
    saveData();
    updateCounter();
}

// Toggle Check or Delete
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        updateCounter();
    } 
    else if (e.target.tagName === "SPAN") {
        if (confirm("🗑️ Do you want to delete this task?")) {
            e.target.parentElement.remove();
            saveData();
            updateCounter();
        }
    }
}, false);

// Save to Local Storage
function saveData() {
    localStorage.setItem("todoData", listContainer.innerHTML);
}

// Show Saved Tasks
function showTask() {
    listContainer.innerHTML = localStorage.getItem("todoData") || "";
    updateCounter();
}

// Task Counter
function updateCounter() {
    let total = listContainer.querySelectorAll("li").length;
    let completed = listContainer.querySelectorAll("li.checked").length;
    if (taskCounter) {
        taskCounter.innerText = `✅ Completed: ${completed} | 📌 Total: ${total}`;
    }
}

// Add Task on Enter Key
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Clear All Tasks
function clearAllTasks() {
    if (confirm("⚠️ Are you sure you want to clear all tasks?")) {
        listContainer.innerHTML = "";
        saveData();
        updateCounter();
    }
}


showTask();

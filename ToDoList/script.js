// ============================================
// DOM ELEMENTS
// ============================================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompleted");

const filterButtons = document.querySelectorAll(".filter-btn");


// ============================================
// APPLICATION STATE
// ============================================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";


// ============================================
// SAVE DATA TO LOCAL STORAGE
// ============================================

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


// ============================================
// GENERATE UNIQUE ID
// ============================================

function generateId() {

    return Date.now().toString();
}


// ============================================
// CREATE TASK
// ============================================

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }

    const newTask = {

        id: generateId(),

        text: taskText,

        completed: false

    };

    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    renderTasks();

    taskInput.focus();
}


// ============================================
// READ / DISPLAY TASKS
// ============================================

function renderTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    // Apply filter

    if (currentFilter === "active") {

        filteredTasks = tasks.filter(
            task => !task.completed
        );
    }

    if (currentFilter === "completed") {

        filteredTasks = tasks.filter(
            task => task.completed
        );
    }


    // Display empty message

    if (filteredTasks.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";
    }


    // Create task elements dynamically

    filteredTasks.forEach(task => {

        const li = document.createElement("li");

        li.className = "task-item";

        li.dataset.id = task.id;


        if (task.completed) {

            li.classList.add("completed");
        }


        // Checkbox

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.className = "task-checkbox";

        checkbox.checked = task.completed;


        // Task text

        const span = document.createElement("span");

        span.className = "task-text";

        span.textContent = task.text;


        // Action buttons

        const actions = document.createElement("div");

        actions.className = "task-actions";


        const editButton = document.createElement("button");

        editButton.className = "edit-btn";

        editButton.dataset.action = "edit";

        editButton.textContent = "Edit";


        const deleteButton = document.createElement("button");

        deleteButton.className = "delete-btn";

        deleteButton.dataset.action = "delete";

        deleteButton.textContent = "Delete";


        actions.appendChild(editButton);

        actions.appendChild(deleteButton);


        li.appendChild(checkbox);

        li.appendChild(span);

        li.appendChild(actions);


        taskList.appendChild(li);

    });


    updateTaskCount();
}


// ============================================
// UPDATE TASK
// ============================================

function toggleTask(taskId) {

    const task = tasks.find(
        task => task.id === taskId
    );

    if (!task) return;

    task.completed = !task.completed;

    saveTasks();

    renderTasks();
}


// ============================================
// EDIT TASK
// ============================================

function editTask(taskId) {

    const task = tasks.find(
        task => task.id === taskId
    );

    if (!task) return;

    const updatedText = prompt(
        "Edit your task:",
        task.text
    );


    if (updatedText === null) {

        return;
    }


    const newText = updatedText.trim();


    if (newText === "") {

        alert("Task cannot be empty.");

        return;
    }


    task.text = newText;

    saveTasks();

    renderTasks();
}


// ============================================
// DELETE TASK
// ============================================

function deleteTask(taskId) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this task?"
    );


    if (!confirmDelete) {

        return;
    }


    tasks = tasks.filter(
        task => task.id !== taskId
    );

    saveTasks();

    renderTasks();
}


// ============================================
// EVENT DELEGATION
// ============================================

taskList.addEventListener("click", function(event) {

    const taskItem = event.target.closest(".task-item");

    if (!taskItem) return;


    const taskId = taskItem.dataset.id;


    // Edit button

    if (
        event.target.dataset.action === "edit"
    ) {

        editTask(taskId);
    }


    // Delete button

    if (
        event.target.dataset.action === "delete"
    ) {

        deleteTask(taskId);
    }

});


// ============================================
// CHECKBOX EVENT
// ============================================

taskList.addEventListener("change", function(event) {

    if (
        event.target.classList.contains("task-checkbox")
    ) {

        const taskItem =
            event.target.closest(".task-item");

        const taskId =
            taskItem.dataset.id;

        toggleTask(taskId);
    }

});


// ============================================
// FILTER TASKS
// ============================================

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        this.classList.add("active");


        currentFilter =
            this.dataset.filter;


        renderTasks();

    });

});


// ============================================
// CLEAR COMPLETED TASKS
// ============================================

clearCompletedBtn.addEventListener(
    "click",
    function() {

        tasks = tasks.filter(
            task => !task.completed
        );

        saveTasks();

        renderTasks();

    }
);


// ============================================
// ADD TASK BUTTON
// ============================================

addTaskBtn.addEventListener(
    "click",
    addTask
);


// ============================================
// ENTER KEY SUPPORT
// ============================================

taskInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            addTask();
        }

    }
);


// ============================================
// INITIAL RENDER
// ============================================

renderTasks();
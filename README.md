# 📝 To-Do List Application

A responsive and interactive **To-Do List web application** developed using **HTML, CSS, and JavaScript**. This project demonstrates JavaScript DOM manipulation, event handling, CRUD operations, state management, filtering, and browser data persistence using `localStorage`.

## 🚀 Features

* ➕ Add new tasks
* 👀 View all tasks
* ✏️ Edit existing tasks
* 🗑️ Delete tasks
* ✅ Mark tasks as completed
* 🔄 Toggle tasks between active and completed
* 🔍 Filter tasks by:

  * All
  * Active
  * Completed
* 💾 Automatically save tasks using browser `localStorage`
* 🧹 Clear all completed tasks
* ⌨️ Add tasks using the Enter key
* 📱 Responsive design for desktop and mobile devices
* ⚡ Dynamic DOM element creation
* 🎯 Event delegation for dynamically generated task actions

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive design
* **JavaScript** – Application logic and DOM manipulation
* **Browser LocalStorage** – Persistent task data

## 📂 Project Structure

```text
To-Do-List/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

### 1. Add a Task

Enter a task in the input field and click **Add Task**. The task is added to the application state and displayed dynamically.

### 2. Complete a Task

Click the checkbox next to a task to mark it as completed. Completed tasks are displayed with a strikethrough style.

### 3. Edit a Task

Click the **Edit** button to modify an existing task.

### 4. Delete a Task

Click the **Delete** button to remove a task from the list.

### 5. Filter Tasks

Tasks can be filtered using:

```text
All → Displays all tasks
Active → Displays incomplete tasks
Completed → Displays completed tasks
```

### 6. Persistent Storage

The application uses the browser's `localStorage` API to store tasks.

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

When the application is opened again, the stored tasks are automatically loaded.

## 🧠 JavaScript Concepts Practiced

This project was created to practice important JavaScript concepts such as:

* DOM Manipulation
* Event Handling
* Event Delegation
* Arrays and Objects
* Array Methods
* Functions
* Conditional Statements
* JSON
* LocalStorage
* State Management
* Dynamic HTML Element Creation

## 🔄 CRUD Operations

The application implements complete CRUD functionality:

| Operation | Function                |
| --------- | ----------------------- |
| Create    | Add a new task          |
| Read      | Display stored tasks    |
| Update    | Edit or complete a task |
| Delete    | Remove a task           |

## 💾 Data Persistence

Task data is stored in the browser using `localStorage`.

Example task object:

```javascript
{
    id: "123456789",
    text: "Complete JavaScript project",
    completed: false
}
```

The data remains available even after refreshing or reopening the browser.

## ▶️ How to Run

### Step 1

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2

Open the project folder:

```bash
cd To-Do-List
```

### Step 3

Open `index.html` in your browser.

You can also use **Visual Studio Code with Live Server** to run the project.

## 📸 Application Preview

Add a screenshot of your application here:

```markdown
![To-Do List Screenshot](screenshot.png)
```

## 🎯 Learning Outcome

Through this project, I gained practical experience in building a **state-driven client-side web application** and learned how to manage user interactions, dynamically update the DOM, implement CRUD operations, and persist data using browser `localStorage`.

## 👩‍💻 Author

**Hemalatha Raja**

B.E. Computer Science and Engineering

Arunai Engineering College

## 📌 Project Type

**JavaScript Logic & State Management – To-Do List Application**

---

⭐ If you find this project useful, consider giving the repository a star!

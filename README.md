# To-Do List

This project is a simple web-based to-do list application built using HTML, CSS, and JavaScript.

## Features

- Add tasks to the to-do list.
- Mark tasks as completed.
- Delete tasks from the list.
- Tasks are saved to local storage, ensuring persistence even after refreshing the page.
- Responsive design for seamless usage on different devices.

## How to Use

1. **Adding a Task:** Enter a task in the input field and click the "Add" button.
2. **Marking a Task as Completed:** Click on a task to toggle its completion status.
3. **Deleting a Task:** Click the "Delete" button next to a task to remove it from the list.

## Implementation Details

### HTML Structure

- The `<div class="container">` wraps all elements in the application.
- The to-do list title and input area are contained within `<div class="new-task">`.
- Tasks are displayed inside `<div class="tasks">`.

### CSS Styling

- Styles are applied for consistent and visually appealing design.
- The container is centered on the page with a maximum width for better readability.
- Input fields, buttons, and tasks are styled for a seamless interface.
- Tasks have distinctive styles, with completed tasks visually different to provide clear feedback.

### JavaScript Functionality

- The `addTask` function adds tasks to the list.
- The `deleteTask` function removes tasks from the list.
- Tasks are saved to local storage for persistence.
- Tasks are loaded from local storage when the page is loaded.

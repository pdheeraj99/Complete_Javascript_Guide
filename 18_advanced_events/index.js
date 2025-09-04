document.addEventListener('DOMContentLoaded', () => {

    console.log("--- Advanced Events Script Loaded ---");

    // --- 1. Event Delegation ---
    console.log("\n--- 1. Event Delegation Demo ---");

    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');

    // Add a SINGLE event listener to the parent `ul` element.
    taskList.addEventListener('click', (event) => {
        // `event.target` is the actual element that was clicked inside the `ul`.
        console.log("Clicked on:", event.target);

        // Check if the clicked element was an `LI` tag.
        if (event.target.tagName === 'LI') {
            // Toggle a 'completed' class on the specific `li` that was clicked.
            event.target.classList.toggle('completed');
        }
    });

    // Add a listener to the button to demonstrate delegation with new elements.
    addTaskBtn.addEventListener('click', () => {
        const newTask = document.createElement('li');
        const taskCount = taskList.children.length + 1;
        newTask.textContent = `New Task ${taskCount}`;
        taskList.appendChild(newTask);
        console.log("Added a new task. Click on it to see delegation work!");
    });


    // --- 2. Custom Events ---
    console.log("\n--- 2. Custom Events Demo ---");

    const userCard = document.getElementById('user-card');
    const updateUserBtn = document.getElementById('update-user-btn');
    const userNameEl = document.getElementById('user-name');
    const userStatusEl = document.getElementById('user-status');

    // Listen for our custom event on the user card.
    userCard.addEventListener('user:updated', (event) => {
        console.log("Caught the custom 'user:updated' event!");

        // Get the custom data from the `detail` property.
        const { name, status } = event.detail;

        // Update the UI with the new data.
        userNameEl.textContent = name;
        userStatusEl.textContent = status;
    });

    // When the button is clicked, dispatch the custom event.
    updateUserBtn.addEventListener('click', () => {
        console.log("Update button clicked. Dispatching custom event...");

        // 1. Create the CustomEvent.
        const userUpdateEvent = new CustomEvent('user:updated', {
            bubbles: true, // Allow the event to bubble up the DOM tree
            detail: {
                name: 'Mawa',
                status: 'Coding'
            }
        });

        // 2. Dispatch the event on the user card element.
        userCard.dispatchEvent(userUpdateEvent);
    });
});

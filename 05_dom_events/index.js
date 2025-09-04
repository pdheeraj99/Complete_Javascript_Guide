document.addEventListener('DOMContentLoaded', () => {

    console.log("--- DOM Events Script Loaded ---");

    // --- 1. Simple Click Event ---
    const clickBtn = document.getElementById('click-me-btn');
    clickBtn.addEventListener('click', () => {
        alert('You clicked the button! 🎉');
        console.log('Button was clicked.');
    });

    // --- 2. Mouse Events ---
    const hoverBox = document.getElementById('hover-box');
    hoverBox.addEventListener('mouseover', () => {
        hoverBox.style.backgroundColor = 'gold';
        hoverBox.textContent = "You're hovering over me!";
    });
    hoverBox.addEventListener('mouseout', () => {
        hoverBox.style.backgroundColor = 'lightblue';
        hoverBox.textContent = "Hover over me to change my color.";
    });

    // --- 3. Keyboard Events ---
    const nameInput = document.getElementById('name-input');
    const keyOutput = document.getElementById('key-output');
    nameInput.addEventListener('keydown', (event) => {
        // The 'event' object contains info about the event, like which key was pressed
        keyOutput.textContent = event.key;
        console.log(`Key pressed: ${event.key}`);
    });

    // --- 4. Form Submit Event & preventDefault ---
    const testForm = document.getElementById('test-form');
    const formOutput = document.getElementById('form-output');
    testForm.addEventListener('submit', (event) => {
        // Stop the browser's default behavior of reloading the page on form submission
        event.preventDefault();

        const username = document.getElementById('username').value;
        console.log(`Form submitted with username: ${username}`);
        formOutput.textContent = `Thank you, ${username}! The form was submitted without a page reload.`;
        testForm.reset();
    });

    // --- 5. Link preventDefault ---
    const testLink = document.getElementById('test-link');
    testLink.addEventListener('click', (event) => {
        // Stop the link from navigating to the new page
        event.preventDefault();
        alert("Link navigation was prevented by JavaScript!");
        console.log("Prevented link from navigating to Google.");
    });


    // --- 6. Event Bubbling Demonstration ---
    const outer = document.getElementById('outer');
    const middle = document.getElementById('middle');
    const inner = document.getElementById('inner');

    // Add a listener to each div
    outer.addEventListener('click', () => {
        console.log("🔴 Outer div clicked (Bubbling)");
    });

    middle.addEventListener('click', () => {
        console.log("🔵 Middle div clicked (Bubbling)");
    });

    inner.addEventListener('click', (event) => {
        console.log("🟢 Inner div clicked (Target)");
        // To stop the event from bubbling up to the middle and outer divs,
        // you would uncomment the line below:
        // event.stopPropagation();
        // console.log("--- Bubbling Stopped ---");
    });

    console.log("\n--- Script Finished ---");
});

// It's a best practice to wait for the DOM to be fully loaded before running any script
// that interacts with it. We do this by listening for the 'DOMContentLoaded' event.
document.addEventListener('DOMContentLoaded', () => {

    console.log("--- DOM Manipulation Script Loaded ---");

    // --- 1. Selecting Elements ---
    console.log("\n--- 1. Selecting Elements ---");

    // Get element by ID (returns a single element)
    const mainTitle = document.getElementById('main-title');
    console.log("getElementById('main-title'):", mainTitle);

    // Get elements by Class Name (returns a live HTMLCollection)
    const contentParagraphs = document.getElementsByClassName('content');
    console.log("getElementsByClassName('content'):", contentParagraphs);

    // Modern way: querySelector (returns the FIRST matching element)
    const introText = document.querySelector('#intro-text');
    console.log("querySelector('#intro-text'):", introText);

    // Modern way: querySelectorAll (returns a static NodeList)
    const allListItemsWithClass = document.querySelectorAll('.item');
    console.log("querySelectorAll('.item'):", allListItemsWithClass);


    // --- 2. Manipulating Elements ---
    console.log("\n--- 2. Manipulating Elements ---");

    // Changing content with textContent (safe)
    if (mainTitle) {
        mainTitle.textContent = "Welcome to the DOM World! 🚀";
        console.log("Changed main title text content.");
    }

    // Changing content with innerHTML (can be risky, but useful for adding HTML)
    if (introText) {
        introText.innerHTML = "This text has been <strong>boldly</strong> updated using `innerHTML`.";
        console.log("Changed intro paragraph's innerHTML.");
    }

    // Changing styles
    const itemList = document.querySelector('#item-list');
    if (itemList) {
        // We can target specific children
        const secondItem = itemList.children[1]; // second item is at index 1
        secondItem.style.color = 'blue';
        secondItem.style.fontWeight = 'bold';
        console.log("Changed the style of the second list item.");
    }

    // Adding/Removing classes
    allListItemsWithClass.forEach(item => {
        item.classList.add('highlight');
    });
    console.log("Added 'highlight' class to all items with class 'item'.");


    // --- 3. Manipulating Attributes ---
    console.log("\n--- 3. Manipulating Attributes ---");
    const practiceImage = document.getElementById('practice-image');
    if (practiceImage) {
        practiceImage.setAttribute('src', 'https://via.placeholder.com/200');
        practiceImage.setAttribute('alt', 'A new, larger placeholder image');
        console.log("Changed the image's src and alt attributes.");
    }


    // --- 4. Creating and Adding Elements ---
    console.log("\n--- 4. Creating and Adding Elements ---");
    const creationZone = document.getElementById('creation-zone');
    if (creationZone) {
        // Create a new element in memory
        const newDiv = document.createElement('div');

        // Add properties and content to it
        newDiv.className = 'new-element';
        newDiv.textContent = "I am a brand new element created with JavaScript!";

        // Append it to the DOM
        creationZone.append(newDiv);
        console.log("Created and appended a new div to the 'creation-zone'.");
    }

    // --- 5. Deleting Elements ---
    console.log("\n--- 5. Deleting Elements ---");
    if (itemList) {
        const itemToRemove = itemList.children[2]; // Target "Item 3 (no class)"
        if(itemToRemove) {
            itemToRemove.remove(); // Modern and easy way to remove
            console.log("Removed the third list item ('Item 3').");
        }
    }

    console.log("\n--- Script Finished ---");
});

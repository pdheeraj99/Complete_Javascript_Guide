document.addEventListener('DOMContentLoaded', () => {

    console.log("--- Advanced DOM Script Loaded ---");

    // --- Get DOM Elements ---
    const watchedBox = document.getElementById('watched-box');
    const mutationLog = document.getElementById('mutation-log');
    const addItemBtn = document.getElementById('add-item-btn');
    const changeAttrBtn = document.getElementById('change-attr-btn');
    const changeTextBtn = document.getElementById('change-text-btn');

    // --- 1. Create the Observer ---
    // The callback function is executed whenever a mutation is observed.
    const mutationCallback = (mutationsList, observer) => {
        for (const mutation of mutationsList) {
            let logMessage = '';
            if (mutation.type === 'childList') {
                logMessage = `A child node was added or removed.`;
                console.log('Child list changed:', mutation);
            } else if (mutation.type === 'attributes') {
                logMessage = `Attribute '${mutation.attributeName}' was modified.`;
                console.log('Attribute changed:', mutation);
            } else if (mutation.type === 'characterData') {
                logMessage = `Text content of a node changed.`;
                console.log('Character data changed:', mutation);
            }

            // Log the mutation to our on-screen log
            const logEntry = document.createElement('div');
            logEntry.className = 'log-entry';
            logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${logMessage}`;
            mutationLog.prepend(logEntry);
        }
    };

    // Create an instance of the observer with the callback
    const observer = new MutationObserver(mutationCallback);

    // --- 2. Define Observer Config ---
    // Tell the observer what to watch for.
    const config = {
        attributes: true,      // Watch for attribute changes
        childList: true,       // Watch for additions/removals of child nodes
        subtree: true,         // Watch descendants as well
        characterData: true    // Watch for changes to the text content of nodes
    };

    // --- 3. Start Observing ---
    observer.observe(watchedBox, config);
    console.log("Mutation Observer is now watching the blue box.");

    // You can stop observing later if needed with: observer.disconnect();


    // --- 4. Add Event Listeners to Buttons to Trigger Mutations ---
    addItemBtn.addEventListener('click', () => {
        const list = document.getElementById('watched-list');
        const newItem = document.createElement('li');
        newItem.textContent = `New Item ${list.children.length + 1}`;
        list.appendChild(newItem);
    });

    changeAttrBtn.addEventListener('click', () => {
        const newStatus = watchedBox.getAttribute('data-status') === 'idle' ? 'active' : 'idle';
        watchedBox.setAttribute('data-status', newStatus);
    });

    changeTextBtn.addEventListener('click', () => {
        const textNode = document.getElementById('watched-text');
        textNode.textContent = `Text changed at ${new Date().toLocaleTimeString()}`;
    });

});

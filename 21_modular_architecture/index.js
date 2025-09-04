console.log("--- 'index.js' (main script) has been loaded. ---");
console.log("The 'module.js' file has NOT been loaded yet.");

const loadModuleBtn = document.getElementById('load-module-btn');

loadModuleBtn.addEventListener('click', async () => {
    console.log("Button clicked. Starting dynamic import...");

    try {
        // The import() function returns a promise.
        // We await the promise, which resolves with the module's exports.
        // The browser will now fetch and execute 'module.js'.
        const myModule = await import('./module.js');

        // Now we can use the functions exported from the module.
        myModule.greet();

    } catch (error) {
        console.error("Failed to load the module:", error);
    }
});

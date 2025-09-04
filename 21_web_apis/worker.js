// This script runs in a separate background thread.
// It does NOT have access to the DOM or the `window` object.
// `self` refers to the worker's global scope.

console.log("Worker script loaded.");

self.onmessage = function(event) {
    console.log("Worker received a message:", event.data);

    if (event.data === 'start') {
        // Simulate a long, CPU-intensive calculation
        let result = 0;
        // This loop will take a few seconds to complete, but it won't freeze the UI
        // because it's running in this background thread.
        for (let i = 0; i < 10000000000; i++) {
            result += 1;
        }

        // Post the result back to the main thread
        self.postMessage(result);
    }
};

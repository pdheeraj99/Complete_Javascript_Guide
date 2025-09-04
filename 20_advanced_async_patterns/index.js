// --- Note for DOM examples: This script is meant to be run in a browser with the corresponding HTML file. ---
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Debouncing ---
    const searchInput = document.getElementById('search-input');
    const debounceLog = document.getElementById('debounce-log');

    function debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    const logApiCall = (query) => {
        debounceLog.innerHTML += `Making API call for query: "${query}"<br>`;
    };

    const debouncedApiCall = debounce(logApiCall, 300);

    searchInput.addEventListener('input', (event) => {
        debouncedApiCall(event.target.value);
    });


    // --- 2. Throttling ---
    const scrollBox = document.getElementById('scroll-box');
    const throttleLog = document.getElementById('throttle-log');

    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    const logScrollEvent = () => {
        throttleLog.innerHTML += `Scroll event fired!<br>`;
    };

    const throttledScroll = throttle(logScrollEvent, 100);

    scrollBox.addEventListener('scroll', throttledScroll);

});


// --- Note for Node.js example: This part can be run directly with Node.js ---
// To run, comment out the DOMContentLoaded part above and use: node 19_advanced_async_patterns/index.js

// --- 3. Async Generators ---
console.log("\n--- 3. Async Generators ---");

// This async generator simulates fetching pages of data from an API.
async function* fetchPaginatedData() {
    let page = 1;
    while (page <= 3) {
        console.log(`(Fetching page ${page}...)`);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Yield the data for the current page
        yield { page, data: `Data from page ${page}` };

        page++;
    }
}

// This async function consumes the data stream from the generator.
async function consumeDataStream() {
    console.log("Starting to consume data stream...");

    // The `for await...of` loop waits for each promise yielded by the generator to resolve.
    for await (const pageData of fetchPaginatedData()) {
        console.log("Received:", pageData);
    }

    console.log("Finished consuming data stream.");
}

// Start the process
consumeDataStream();

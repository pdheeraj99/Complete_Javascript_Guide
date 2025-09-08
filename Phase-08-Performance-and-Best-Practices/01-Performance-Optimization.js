// ==================================================================
// ⚡ Phase 8: Performance Optimization - Code Examples ⚡
// ==================================================================

// NOTE: To test these, you would typically attach them to DOM events
// in an HTML file, like a search input or the window's scroll event.
// Here, we will simulate the events with loops to demonstrate the concept.

// --- 1. Debounce ---
// Groups a burst of calls into a single one after a quiet period.
console.log("--- Debounce Example ---");

function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    // Clear the previous timeout if a new call comes in
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// The function we want to debounce (e.g., an API call)
function searchAPI(query) {
  console.log(`(API Call) Searching for: "${query}"`);
}

// Create a debounced version of our search function with a 500ms delay
const debouncedSearch = debounce(searchAPI, 500);

console.log("Simulating rapid typing in a search bar...");
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");
debouncedSearch("hell");
debouncedSearch("hello");
// Notice how only ONE API call will be made 500ms after the last input.


// --- 2. Throttle ---
// Ensures a function is called at most once per specified time period.
setTimeout(() => {
  console.log("\n--- Throttle Example ---");

  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // The function we want to throttle (e.g., a function that runs on scroll)
  let scrollCount = 0;
  function onScroll() {
    scrollCount++;
    console.log(`(Scroll Handler) Fired! Total fires: ${scrollCount}`);
  }

  // Create a throttled version that can only run once every 1000ms
  const throttledScroll = throttle(onScroll, 1000);

  console.log("Simulating a user scrolling very fast...");
  // Simulate 10 scroll events in 500ms
  let eventCounter = 0;
  const intervalId = setInterval(() => {
    eventCounter++;
    throttledScroll();
    if (eventCounter >= 10) {
      clearInterval(intervalId);
      console.log("...simulation finished. Notice the handler only fired a few times, not 10.");
    }
  }, 50);

}, 1000); // Start this example after the debounce example has finished.

// ==================================================================
// 🔄 Phase 5: Callbacks & The Event Loop - Code Examples 🔄
// ==================================================================

// --- 1. Synchronous vs. Asynchronous Execution Order ---
console.log("--- Execution Order ---");

console.log("1. First Message (Sync)");

// This is an asynchronous function. The browser's Web API handles the timer.
// The callback `() => ...` is put into the Callback Queue after 0ms.
setTimeout(() => {
  console.log("3. Third Message (Async - from setTimeout)");
}, 0); // Even with 0ms delay, it's still async!

console.log("2. Second Message (Sync)");

// Expected Output:
// 1. First Message (Sync)
// 2. Second Message (Sync)
// 3. Third Message (Async - from setTimeout)
// Why? The Call Stack must be empty before the Event Loop can move the callback from the queue.
console.log("\n");


// --- 2. The Callback Pattern ---
console.log("--- The Callback Pattern ---");

function getUser(id, callback) {
  console.log("Fetching user from the database...");
  // Simulate a 1.5-second database lookup.
  setTimeout(() => {
    const user = { id: id, name: "N. T. Rama Rao", profession: "Actor" };
    // When the data is "ready", we execute the callback with the data.
    callback(user);
  }, 1500);
}

function displayUser(user) {
  console.log(`User Found: ${user.name} (${user.profession})`);
}

// We pass `displayUser` as the callback to `getUser`.
getUser(101, displayUser);
console.log("\n");


// --- 3. Error-First Callback Pattern ---
console.log("--- Error-First Callback Pattern ---");
function downloadFile(url, callback) {
    console.log(`Downloading from ${url}...`);
    setTimeout(() => {
        // Randomly succeed or fail
        if (Math.random() > 0.3) {
            // Success: first argument is null
            callback(null, "File content: 'This is a secret file.'");
        } else {
            // Failure: first argument is an Error object
            callback(new Error("Network Error: Could not download file."));
        }
    }, 1000);
}

downloadFile("http://example.com/file.txt", (error, data) => {
    if (error) {
        console.error("Download failed:", error.message);
        return; // Stop execution
    }
    console.log("Download successful:", data);
});
console.log("\n");


// --- 4. Callback Hell (The Pyramid of Doom) ---
console.log("--- Callback Hell Example ---");
// Imagine we need to do these things in order:
// 1. Get user
// 2. Get user's posts
// 3. Get comments for the first post

function getUserHell(id, callback) {
  setTimeout(() => {
    console.log("1. Got user");
    callback({ id: id, name: "Prabhas" });
  }, 500);
}

function getPostsHell(user, callback) {
  setTimeout(() => {
    console.log("2. Got posts for", user.name);
    callback([{ id: 1, title: "Baahubali" }, { id: 2, title: "Saaho" }]);
  }, 500);
}

function getCommentsHell(post, callback) {
  setTimeout(() => {
    console.log("3. Got comments for", post.title);
    callback(["Great movie!", "Awesome VFX!"]);
  }, 500);
}

// This is Callback Hell. Notice the pyramid shape.
getUserHell(201, (user) => {
  getPostsHell(user, (posts) => {
    getCommentsHell(posts[0], (comments) => {
      console.log("4. Final result:", comments);
      console.log("This is very hard to read and debug!");
    });
  });
});

// ==================================================================
// 🏎️ Phase 5: `async/await` - Code Examples 🏎️
// ==================================================================

// We'll reuse the promise-based functions from the previous example
function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. Got user");
      if (id) {
        resolve({ id: id, name: "Allu Arjun" });
      } else {
        reject(new Error("User ID not provided"));
      }
    }, 500);
  });
}

function getPostsPromise(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. Got posts for", user.name);
      resolve([{ id: 1, title: "Pushpa" }, { id: 2, title: "Arya" }]);
    }, 500);
  });
}

function getCommentsPromise(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3. Got comments for", post.title);
      resolve(["Super hit!", "Thaggedhe Le!"]);
    }, 500);
  });
}


// --- 1. The `async/await` Syntax ---
console.log("--- `async/await` Example ---");

async function fetchUserWorkflow(userId) {
  console.log("Starting the workflow with async/await...");

  // Using try...catch for elegant error handling
  try {
    const user = await getUserPromise(userId);
    const posts = await getPostsPromise(user);
    const comments = await getCommentsPromise(posts[0]);

    console.log("4. Final Result:", comments);
    console.log("Workflow finished successfully. The code looks so clean!");

  } catch (error) {
    console.error("Workflow failed:", error.message);
  }
}

// Run the successful workflow
fetchUserWorkflow(111);

// Run the workflow that will fail
// setTimeout(() => {
//   console.log("\n--- Running a failing workflow ---");
//   fetchUserWorkflow(null);
// }, 2000);


// --- 2. Sequential vs. Parallel Execution ---
const slowPromise = (ms) => new Promise(resolve => setTimeout(() => resolve(`Completed in ${ms}ms`), ms));

// Sequential: Total time will be roughly 1000ms + 1500ms = 2500ms
async function runSequentially() {
  console.log("\n--- Running Promises Sequentially ---");
  const startTime = Date.now();

  const result1 = await slowPromise(1000);
  console.log("First task done:", result1);

  const result2 = await slowPromise(1500);
  console.log("Second task done:", result2);

  const endTime = Date.now();
  console.log(`Sequential execution took ${endTime - startTime}ms.`);
}

// Parallel: Total time will be the time of the LONGEST promise (1500ms)
async function runInParallel() {
  console.log("\n--- Running Promises in Parallel ---");
  const startTime = Date.now();

  // Start both promises at the same time
  const promise1 = slowPromise(1000);
  const promise2 = slowPromise(1500);

  // Wait for both of them to complete using Promise.all
  const [result1, result2] = await Promise.all([promise1, promise2]);

  console.log("First task result:", result1);
  console.log("Second task result:", result2);

  const endTime = Date.now();
  console.log(`Parallel execution took ${endTime - startTime}ms. (Much faster!)`);
}

setTimeout(() => {
    runSequentially();
    setTimeout(runInParallel, 3000);
}, 2500);


setTimeout(() => {
    console.log("\n\n🎉 Phase 5 Asynchronous JavaScript Complete! You've mastered time! 🎉");
}, 8000);

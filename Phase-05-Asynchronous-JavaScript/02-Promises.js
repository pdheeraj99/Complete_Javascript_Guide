// ==================================================================
// 🤝 Phase 5: Promises - Code Examples 🤝
// ==================================================================

// --- 1. Creating and Consuming a Promise ---
console.log("--- Creating and Consuming a Promise ---");

const simplePromise = new Promise((resolve, reject) => {
  const operationSuccess = true;
  setTimeout(() => {
    if (operationSuccess) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data.");
    }
  }, 1000);
});

simplePromise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operation finished.");
  });

console.log("Promise has been created. Waiting for it to settle...");
console.log("\n");


// --- 2. Solving Callback Hell with Promise Chaining ---
console.log("--- Solving Callback Hell with Promises ---");

// Let's rewrite the "Hell" example from the previous lesson using Promises.
function getUserPromise(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. Got user");
      resolve({ id: id, name: "Prabhas" });
    }, 500);
  });
}

function getPostsPromise(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. Got posts for", user.name);
      resolve([{ id: 1, title: "Baahubali" }, { id: 2, title: "Saaho" }]);
    }, 500);
  });
}

function getCommentsPromise(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3. Got comments for", post.title);
      resolve(["Great movie!", "Awesome VFX!"]);
    }, 500);
  });
}

// The clean, flat Promise chain!
getUserPromise(201)
  .then(user => getPostsPromise(user))
  .then(posts => getCommentsPromise(posts[0]))
  .then(comments => {
    console.log("4. Final result:", comments);
    console.log("This is so much cleaner!");
  })
  .catch(error => {
    console.error("Something went wrong in the chain:", error);
  });

// We need to wait for the chain to finish before moving on.
setTimeout(() => console.log("\n"), 2000);


// --- 3. Static Promise Methods ---
setTimeout(() => {
  console.log("--- Static Promise Methods ---");

  const promise1 = Promise.resolve("First promise resolved");
  const promise2 = new Promise(resolve => setTimeout(() => resolve("Second promise resolved"), 500));
  const promise3 = Promise.reject("Third promise was rejected");

  // Promise.all() - waits for ALL promises to fulfill. Rejects if ANY promise rejects.
  console.log("--- Promise.all() ---");
  Promise.all([promise1, promise2])
    .then(results => console.log("Promise.all success:", results))
    .catch(error => console.error("Promise.all failed:", error));

  Promise.all([promise1, promise2, promise3])
    .then(results => console.log("This will not run."))
    .catch(error => console.error("Promise.all with a rejection:", error));

  // Promise.race() - waits for the FIRST promise to settle (fulfill or reject).
  console.log("\n--- Promise.race() ---");
  Promise.race([promise2, promise3])
    .then(result => console.log("Promise.race success:", result))
    .catch(error => console.error("Promise.race rejection:", error)); // This will win the race

  // Promise.allSettled() - waits for ALL promises to settle, regardless of outcome.
  console.log("\n--- Promise.allSettled() ---");
  Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
      console.log("Promise.allSettled results:");
      results.forEach(res => console.log(`- Status: ${res.status}, Value/Reason: ${res.value || res.reason}`));
    });
}, 2500);

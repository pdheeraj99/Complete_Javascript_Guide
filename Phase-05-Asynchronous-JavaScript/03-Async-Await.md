# 🏎️ Phase 5: `async/await` 🏎️

Welcome to the most modern and readable way to handle asynchronous operations in JavaScript. `async/await` anedi Promises meeda build chesina "syntactic sugar". Adi Promises ni replace cheyadu, kani vaatitho pani cheyadaniki oka beautiful syntax istundi.

---

### 1. The `async` Keyword

`async` keyword ni oka function mundu pedithe, adi rendu vishayalu chestundi:
1.  Aa function ippudu automatically oka **Promise ni return** chestundi.
2.  Aa function lopala manam `await` keyword ni use cheyochu.

```javascript
async function myAsyncFunction() {
  return "Hello, Async!"; // This string will be wrapped in a resolved Promise.
}

myAsyncFunction().then(value => {
  console.log(value); // "Hello, Async!"
});
```

---

### 2. The `await` Keyword

`await` anedi `async` function lopala matrame vaadagalam. Idi oka Promise mundu pedithe, adi function execution ni **pause** chesi, aa Promise settle (fulfill or reject) ayye varaku wait chestundi.

*   Promise fulfill aite, `await` anedi aa **resolved value** ni return chestundi.
*   Promise reject aite, `await` anedi aa **error ni throw** chestundi.

```javascript
async function fetchData() {
  console.log("Fetching data...");
  const promise = new Promise(resolve => setTimeout(() => resolve("Data has arrived!"), 2000));

  const data = await promise; // Execution pauses here for 2 seconds

  console.log(data); // "Data has arrived!" (This line runs only after the promise resolves)
  console.log("Function finished.");
}

fetchData();
```
Chusara? `.then()` ledu. Code antha synchronous ga unnatte undi!

---

### 3. Error Handling with `try...catch`

`await` anedi rejected promise ni error laaga throw chestundi kabatti, manam daanini normal synchronous code laaga `try...catch` block tho handle cheyochu.

```javascript
async function mightFail() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Something went wrong!")), 1000);
  });

  try {
    const result = await promise;
    console.log("Success:", result); // This won't run
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

mightFail();
```
Idi `.catch()` block kanna chala readable and powerful, endukante manam normal error handling logic ne vaadochu.

---

### 4. Rewriting the Promise Chain

Ippudu manam Promise Chaining example ni `async/await` tho rewrite cheddam.

**Promise Chain Version:**
```javascript
// getUserPromise(201)
//   .then(user => getPostsPromise(user))
//   .then(posts => getCommentsPromise(posts[0]))
//   .then(comments => console.log(comments))
//   .catch(error => console.error(error));
```

**`async/await` Version:**
```javascript
async function fetchUserFlow() {
  try {
    const user = await getUserPromise(201);
    const posts = await getPostsPromise(user);
    const comments = await getCommentsPromise(posts[0]);

    console.log("Final result with async/await:", comments);
    console.log("Looks just like sync code!");
  } catch (error) {
    console.error("An error occurred in the flow:", error);
  }
}

fetchUserFlow();
```
Readability lo enta teda undi chudandi! Chala clean and intuitive.

---

### 5. Sequential vs. Parallel Execution

`await` ni line-by-line use cheste, operations okati tarvata okati (sequentially) run avtayi.

```javascript
// Sequential (slow)
async function fetchBothSequentially() {
  const movie1 = await fetchMovie(1); // Waits here
  const movie2 = await fetchMovie(2); // Then starts this one
  return [movie1, movie2];
}
```

Kani rendu operations okadanipai okati depend avvakapothe, vaatini parallel ga run cheyadam better for performance. Daaniki manam `Promise.all` ni `await` tho kalipi vaadatham.

```javascript
// Parallel (fast)
async function fetchBothInParallel() {
  const promise1 = fetchMovie(1); // Starts the first request
  const promise2 = fetchMovie(2); // Starts the second request immediately

  // Wait for BOTH promises to complete
  const [movie1, movie2] = await Promise.all([promise1, promise2]);

  return [movie1, movie2];
}
```
Ee pattern chala important and common.

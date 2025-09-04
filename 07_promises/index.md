# Section 4.2: Promises (The Cure for Callback Hell) 💊

Mawa, manam `Callback Hell` entha darunamga untundho chusam. Code chala messy ga aipothundhi. Aa problem ni solve cheyadaniki, ES6 (2015) lo **Promises** ni introduce chesaru.

### What is a Promise?

A Promise is a special JavaScript object. It's a placeholder for a value that you will get in the future. It's a "promise" from a function that it will give you a result... eventually.

*   **Analogy**: Think of it like a receipt you get when you pre-order a video game.
    *   The receipt itself is not the game. It's just a promise that you'll get the game when it's released.
    *   When the game is released, you get it (**fulfilled** promise).
    *   If the game production is cancelled, you get a notification (**rejected** promise).

A Promise can be in one of three states:
1.  **`pending`**: The initial state. The async operation is still running. (You're waiting for the game).
2.  **`fulfilled`** (or `resolved`): The operation completed successfully. The promise now has a value. (You got the game!).
3.  **`rejected`**: The operation failed. The promise now has an error/reason for failure. (The game was cancelled).

A promise starts as `pending` and can only settle *once* (either fulfilled or rejected).

---

### Creating & Consuming a Promise

**Creating a Promise** (Manam oka promise ni ela create cheyali):
We use the `Promise` constructor, which takes a function (called the "executor") as an argument. The executor itself takes two functions: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
    // Inside here, we do our async work.
    // If it's successful, we call resolve() with the result.
    // If it fails, we call reject() with an error.
});
```

**Consuming a Promise** (Promise nunchi value ni ela theeskovali):
We use special methods that are attached to the promise object.

*   ⭐ `.then(onFulfilled)`: Promise `fulfilled` aithe, ee method lopala unna function run avuthundhi. Aa function ki result pass avuthundhi.
*   ⭐ `.catch(onRejected)`: Promise `rejected` aithe, ee method lopala unna function run avuthundhi. Aa function ki error pass avuthundhi.
*   `.finally(onFinally)`: Promise `fulfilled` aina, `rejected` aina, idhi pakka run avuthundhi. Good for cleanup code.

---

### The Magic of Chaining ✨

Idi Promises lo most important feature. `.then()` method, malli oka **new promise** ni return chestundhi. Deeni valla manam `.then()` calls ni okati tarvata okati chain cheyochu. This completely solves the "Pyramid of Doom"!

**Callback Hell Example, now with Promises:**
```javascript
function getUserData() {
    return new Promise(resolve => setTimeout(() => {
        console.log("1. Got user data.");
        resolve({ userId: 1 });
    }, 1000));
}

function getUserPosts(userId) {
    return new Promise(resolve => setTimeout(() => {
        console.log("2. Got user posts.");
        resolve(['Post 1', 'Post 2']);
    }, 1000));
}

// ... and so on

// The beautiful, flat chain!
getUserData()
    .then(user => getUserPosts(user.userId))
    .then(posts => console.log("Posts:", posts))
    .catch(error => console.error("Something went wrong:", error));
```
Chusara? Code entha clean ga, readable ga undho! No more nesting.

---

### Useful Static Methods

`Promise` object ki konni useful helper methods unnai.

*   ⭐ `Promise.all([promise1, promise2, ...])`:
    *   An array of promises ni theeskuntundhi.
    *   It returns a **new promise** that fulfills only when **ALL** of the promises in the array have fulfilled.
    *   Okaవేళ okka promise reject aina, the entire `Promise.all` rejects immediately.
    *   **Use Case**: Multiple independent API calls chesi, anni results vachaka proceed avvali anukunnapudu.

*   `Promise.race([promise1, promise2, ...])`:
    *   Idi kuda array of promises ni theeskuntundhi.
    *   Array lo unna promises lo ഏది mundhu settle aithe (fulfill or reject), aa result tho `Promise.race` settle avuthundhi. It's a "race" to the finish line.

*   `Promise.allSettled([...])`: `all` laantide, kani okati reject aina wait chestundhi. Anni promises settle ayyaka, prathi promise result (fulfilled or rejected) tho oka array isthundhi.

Now you know the theory. Let's see the code in action in `07_promises/index.js`. Next up: `async/await`, which makes this even easier!

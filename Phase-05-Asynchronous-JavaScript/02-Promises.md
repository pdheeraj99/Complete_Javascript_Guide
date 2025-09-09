# 🤝 Phase 5: Promises 🤝

Callback Hell tho vachina problems ki solution eh Promises. A Promise is an object representing the eventual completion or failure of an asynchronous operation.

---

### 1. The Three States of a Promise

Prathi promise ee 3 states lo okati untundi:
1.  **Pending:** Initial state. Operation inka complete avvaledu.
2.  **Fulfilled (or Resolved):** Operation successfully complete aindi. Promise lo ippudu oka value undi. ✅
3.  **Rejected:** Operation fail aindi. Promise lo ippudu oka error (reason) undi. ❌

Oka promise `Fulfilled` or `Rejected` aiyaka, daani state inka maaradu. Adi "settled" aipoindi antaru.

---

### 2. Creating a Promise

Manam `new Promise()` constructor tho promise ni create chestam. Daaniki manam oka "executor" function ni pass cheyali. Ee executor function ki rendu arguments untayi: `resolve` and `reject`.

*   **`resolve(value)`:** Async operation success aite, ee function ni call chesi, result ni pass cheyali.
*   **`reject(error)`:** Async operation fail aite, ee function ni call chesi, error ni pass cheyali.

```javascript
const myPromise = new Promise((resolve, reject) => {
  console.log("Promise started... (executor function runs immediately)");

  setTimeout(() => {
    const success = true; // Let's pretend this is our async operation
    if (success) {
      resolve("The operation was a success!"); // Fulfill the promise
    } else {
      reject(new Error("The operation failed.")); // Reject the promise
    }
  }, 2000);
});
```

---

### 3. Consuming a Promise: `.then()`, `.catch()`, `.finally()`

Promise create chesaka, daani result kosam wait cheyali. Daaniki ee methods vaadatham.

*   **`.then(onFulfilled, onRejected)`:**
    *   Promise `resolve` aite, `onFulfilled` function call avtundi.
    *   Promise `reject` aite, `onRejected` function call avtundi (kani, `.catch()` vaadatam better practice).
*   **`.catch(onRejected)`:**
    *   Promise `reject` aite (or paina `.then()` lo error vasthe), ee block execute avtundi. Error handling ki idi chala clean way.
*   **`.finally(onFinally)`:**
    *   Promise `resolve` aina or `reject` aina, ee block eppudu execute avtundi. Cleanup operations (like hiding a loading spinner) ki idi perfect.

```javascript
myPromise
  .then((successMessage) => {
    console.log("Success:", successMessage);
  })
  .catch((errorMessage) => {
    console.error("Failure:", errorMessage.message);
  })
  .finally(() => {
    console.log("Promise has settled (either fulfilled or rejected).");
  });
```

---

### 4. Promise Chaining: The Solution to Callback Hell!

Ide promises lo unna super power. `.then()` or `.catch()` eppudu oka kottha promise ni return chestayi. Idi manam multiple async operations ni oka chain laaga link cheyadaniki allow chestundi.

```javascript
step1()
  .then(result1 => {
    console.log("Step 1 successful");
    return step2(result1); // Return a new promise for the next step
  })
  .then(result2 => {
    console.log("Step 2 successful");
    return step3(result2);
  })
  .then(result3 => {
    console.log("Step 3 successful:", result3);
  })
  .catch(error => {
    // Ee chain lo ekkada error vachina, ee single catch block handle chestundi!
    console.error("An error occurred in the chain:", error);
  });
```
Chusara? Nested pyramid poyi, oka clean, flat chain vachindi. Readability and error handling chala easy aipoyayi.

---

### 5. Static Promise Methods

`Promise` object ke konni useful static methods unnayi.

*   **`Promise.all(promisesArray)`:**
    *   Multiple promises ni teeskuntundi. **Anni promises fulfill aite ne**, idi fulfill avtundi. Result ga anni promises yokka results oka array lo vastayi.
    *   Okka promise reject aina, `Promise.all` ventane reject avtundi. Use case: Page load avvadaniki multiple API calls cheyalsi vasthe.

*   **`Promise.race(promisesArray)`:**
    *   Multiple promises ni teeskuntundi. Ee promises lo **edi first settle (fulfill or reject) avtundo**, daani result/error tho `Promise.race` settle avtundi. Migitavi ignore cheyabadatayi.

*   **`Promise.allSettled(promisesArray)`:**
    *   `Promise.all` laantide, kani okati fail aina reject avvadu. Idi **anni promises settle ayye varaku** wait chestundi.
    *   Result ga, prathi promise yokka outcome (status and value/reason) unna object array vastundi. Use case: Multiple independent tasks chesi, ഏది success, ഏది fail aindo teluskovali anukunnappudu.

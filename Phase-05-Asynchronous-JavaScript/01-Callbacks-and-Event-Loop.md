# 🔄 Phase 5: Callbacks & The Event Loop 🔄

Welcome to Asynchronous JavaScript! So far, mana code antha **synchronous** ga run aindi, ante line-by-line, okati tarvata okati. Kani real world lo, manam chala sarlu wait cheyalsi vastundi.

---

### 1. Synchronous vs. Asynchronous

*   **Synchronous (Sync):** Tasks okati tarvata okati execute avtayi. Oka task complete ayye varaku, next task wait cheyali. Idi "blocking" anamata.
    ```javascript
    console.log("First");
    console.log("Second"); // "First" tarvata matrame idi run avtundi.
    ```
*   **Asynchronous (Async):** Oka task ni start chesi, daani result kosam wait cheyakunda, ventane next task ki vellipovachu. Aa long-running task complete ayyaka, manaki result vastundi. Idi "non-blocking".
    ```javascript
    console.log("First");
    setTimeout(() => console.log("Second"), 1000); // 1 sec tarvata run avvadaniki schedule chesam
    console.log("Third");
    // Output: First, Third, Second
    ```

---

### 2. The Magic: How does JavaScript do this? The Event Loop!

JavaScript single-threaded aite, adi wait cheyakunda ela munduku veltundi? The answer is the browser (or Node.js) and the Event Loop.

Idi oka simplified model:
1.  **Call Stack:** JavaScript code execute ayye chotu. Function call chesinappudu, adi stack loki veltundi.
2.  **Web APIs (Browser):** `setTimeout`, network requests (`fetch`) lanti long-running tasks ni JavaScript browser ki istundi. Browser vaatini handle chestundi.
3.  **Callback Queue (or Task Queue):** Browser task complete chesaka (e.g., timer aipoyaka), adi aa task ki sambandinchina **callback function** ni ee queue lo pedutundi.
4.  **Event Loop:** Idi oka simple process. Call Stack khali ga unnappudu, Event Loop Callback Queue lo emaina unnayo chusi, unte daanini teesi Call Stack loki pampistundi. Appudu aa callback function execute avtundi.

Ee model valla, JavaScript main thread eppudu block avvadu.

#### Microtasks vs. Macrotasks (Advanced)
Queue anedi nijamga rendu queues:
*   **Macrotask Queue (or Task Queue):** `setTimeout`, `setInterval`, I/O lanti tasks ikkadiki vastayi.
*   **Microtask Queue:** `Promises` (mana next topic), `queueMicrotask` lanti tasks ikkadiki vastayi.
**Rule:** Event Loop eppudu **Microtask Queue ki high priority** istundi. Microtask Queue antha khali ayye varake, adi Macrotask Queue nunchi okka task ni teeskuntundi.

---

### 3. The Callback Pattern

Async operation complete ayyaka em cheyalo cheppadaniki, manam oka function ni pass chestam. Ade **callback**.

```javascript
function fetchData(callback) {
  console.log("Fetching data...");
  // Simulate a 2-second network delay
  setTimeout(() => {
    const data = { id: 1, message: "Hello from the server!" };
    callback(data); // Data ready. Now call the callback with the data.
  }, 2000);
}

fetchData(function(receivedData) { // This is our callback function
  console.log("Data received:", receivedData);
});
```

---

### 4. Error Handling in Callbacks

Async operations fail avvachu (e.g., network error). So, error ni handle cheyadam important. Common convention enti ante **"Error-First Callback"**.

Callback function lo first argument eppudu `error` kosam reserve chestaru. Error lekapothe, adi `null` or `undefined` ga untundi.

```javascript
function fetchDataWithError(callback) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      // Success
      callback(null, { data: "Here is your data!" });
    } else {
      // Failure
      callback(new Error("Network connection failed!"), null);
    }
  }, 1000);
}

fetchDataWithError((error, data) => {
  if (error) {
    console.error("Oops, an error occurred:", error.message);
    return;
  }
  console.log("Success:", data);
});
```

---

### 5. The Problem: Callback Hell (Pyramid of Doom) 🔥

Manam multiple dependent async operations cheyalsi vasthe, code chala messy ga tayaravutundi. Okati tarvata okati, nested callbacks create avtayi.

```javascript
// The Pyramid of Doom!
step1(function(result1) {
  step2(result1, function(result2) {
    step3(result2, function(result3) {
      step4(result3, function(result4) {
        // ...and so on
        console.log("This is hard to read and manage!");
      });
    });
  });
});
```
Ee code ni "Pyramid of Doom" or **Callback Hell** antaru.
*   **Readability:** Chala kastamga untundi.
*   **Error Handling:** Prathi level lo error ni handle cheyadam chala complex.
*   **Maintainability:** Debug cheyadam and modify cheyadam chala ibbandi.

Ee problem ni solve cheyadanike, **Promises** vachayi (mana next topic!).

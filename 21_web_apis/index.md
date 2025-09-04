# Section 12: Browser Power-Ups (Web APIs) 🔌

Mawa, browser manaku kevalam DOM matrame ivvadu. Mana web applications ki extra super-powers icche chala APIs ni provide chestundhi. Ee section lo manam, data ni store cheyadaniki and heavy calculations cheyadaniki use ayye konni important Web APIs gurinchi nerchukundam.

---

### 1. Web Storage: `localStorage` & `sessionStorage`

Evi browser lo data ni save cheskovadaniki simple key-value stores.

**The "How"**:
API chala simple ga untundhi:
*   `localStorage.setItem('key', 'value')`: Data ni set cheyadaniki.
*   `localStorage.getItem('key')`: Data ni get cheyadaniki.
*   `localStorage.removeItem('key')`: Oka item ni remove cheyadaniki.
*   `localStorage.clear()`: Anni items ni clear cheyadaniki.
(`sessionStorage` ki kuda ide API untundhi).

**The "What" & Crucial Difference 🧠**:

*   **`localStorage`**:
    *   Data **permanently** store avuthundhi (user manual ga clear chese varaku).
    *   Browser close chesi, reopen chesina data alaane untundhi.
    *   Data is **shared across all tabs and windows** from the same origin.
    *   **Use Case**: User preferences (like theme 'dark'/'light'), remembering a user's login status.

*   **`sessionStorage`**:
    *   Data kevalam aa **page session** varake untundhi.
    *   Tab or window close cheyagane, data **clear aipothundhi**.
    *   Prathi tab ki daani **own separate `sessionStorage`** untundhi.
    *   **Use Case**: Storing temporary data for a multi-step form. User tab close cheste, aa temporary data automatic ga povalani anukunnapudu.

**Limitations & Performance Trade-offs 🧠**:
*   **Only stores strings**: Objects or arrays ni store cheyalante, `JSON.stringify()` chesi store cheyali, and retrieve chesaka `JSON.parse()` cheyali.
*   **Limited Size**: Usually around 5MB. Pedda data kosam kaadu.
*   **Synchronous (Blocking!)**: This is the most important trade-off. `localStorage` and `sessionStorage` operations are **synchronous**. Ante, meeru pedda data ni write chestunnapudu, adi complete ayye varaku main thread block avuthundhi, which can make your UI feel sluggish.
*   **Conclusion**: For small, simple data that is not written frequently, Web Storage is great. For anything larger or more complex, use IndexedDB.

---

### 2. IndexedDB: The Browser's Database

**The "What"**:
IndexedDB is a full-fledged, transactional, object-oriented database that lives inside the user's browser. Idi Web Storage kanna chala powerful.

**The "Why"**:
*   You need to store **large amounts of structured data**.
*   You need to **search, query, or index** that data efficiently.
*   You are building an application with **offline capabilities**.

**The "How" (High-Level Concepts)**:
The IndexedDB API is very powerful but also very complex and event-based. Real-world applications often use a library like `idb` to simplify it. But the core concepts are:
*   **Database**: The main container for your data.
*   **Object Stores**: Like "tables" in a traditional SQL database.
*   **Indexes**: To make searching by a specific property very fast.
*   **Transactions**: All read/write operations must happen inside a transaction.

---

### 3. Web Workers: Background Threads for JavaScript

**The "What"**:
A Web Worker allows you to run a JavaScript script in a **background thread**, completely separate from the main UI thread.

**The "Why"**:
The main thread (UI thread) is responsible for everything the user sees and interacts with: rendering HTML, applying CSS, and running most of your JavaScript. If you run a long, CPU-intensive task (like complex calculations, processing a large image, or parsing a huge JSON file) on the main thread, the **UI will completely freeze**. The user won't be able to click, scroll, or do anything.

Web Workers solve this problem by offloading this heavy work to a background thread, keeping the UI smooth and responsive.

**The "How"**:
It's a message-passing system.

1.  **Main Script**: Create a new worker and define how to communicate with it.
    *   `const myWorker = new Worker('worker.js');` // Create the worker
    *   `myWorker.postMessage(data);` // Send data to the worker
    *   `myWorker.onmessage = (event) => { ... };` // Listen for messages from the worker

2.  **Worker Script (`worker.js`)**: The worker script listens for messages, does the heavy work, and posts the result back.
    *   `self.onmessage = (event) => { ... };` // Listen for messages from the main thread
    *   `self.postMessage(result);` // Send the result back

**Limitations & Performance Considerations 🧠**:
*   **No DOM Access**: Workers run in a separate context. They **do not have access to the `window` object or the DOM**. You cannot directly manipulate the UI from a worker.
*   **Communication Overhead**: The main thread and the worker communicate by passing messages. When you `postMessage`, the data is usually **copied** (using a process called "structured cloning"), not shared. Sending very large objects (e.g., megabytes of data) can be slow and memory-intensive due to this copying.
    *   *Advanced Tip*: For high-performance scenarios, you can use `Transferable Objects` to transfer ownership of data (like an `ArrayBuffer`) from the main thread to the worker without copying, which is almost instant.
*   **Memory Cost**: Prathi worker oka separate thread lo run avuthundhi, which consumes system resources (CPU and memory). Creating too many workers can be counter-productive and slow down the user's entire system. Use them wisely for truly heavy tasks.

Let's see these APIs in action!

# Section 6.2: The Engine Room (Event Loop & Memory) ⚙️

Mawa, ee section lo manam JavaScript engine lopala em jaruguthundho, koncham inka deep ga chuddam. Idi advanced topic, kani idi a master cheste, you'll be able to predict your code's behavior with incredible accuracy.

---

### 1. The Event Loop (In-Depth)

Manam Section 4 lo Event Loop gurinchi nerchukunnam (Call Stack, Web APIs, Callback Queue). Ippudu daaniki oka crucial layer add cheddam.

The truth is, there isn't just one "Callback Queue". There are two main types:

1.  **Macrotask Queue** (or just "Task Queue"):
    *   Idi manam mundu "Callback Queue" anukunnade.
    *   Deentlo callbacks from `setTimeout`, `setInterval`, I/O operations (like file reading in Node.js), and user interactions (`click`, `scroll`) untai.

2.  **Microtask Queue**:
    *   Idi oka special, **higher-priority** queue.
    *   Deentlo callbacks from `Promise.then()`, `.catch()`, `.finally()`, `async/await`, and `queueMicrotask()` untai.

**The Golden Rule of the Event Loop 🧠**

The Event Loop follows this strict order:
1.  Execute the current script until the **Call Stack** is empty.
2.  After the stack is empty, it looks at the **Microtask Queue**. It will execute **ALL** tasks in the microtask queue, one by one, until it is completely empty.
3.  Only after the Microtask Queue is empty, it will pick up **ONE** task from the **Macrotask Queue**, push it to the Call Stack, and execute it.
4.  Repeat the cycle (check for microtasks again, then one macrotask).

**Visualization:**
```mermaid
graph TD
    A[Call Stack]
    B(Event Loop)
    C[Microtask Queue (High Priority)]
    D[Macrotask Queue (Low Priority)]

    A -- "Script finishes" --> B;
    B -- "1. Are there any Microtasks?" --> C;
    C -- "Yes, run ALL of them" --> A;
    A -- "Microtasks done, stack empty" --> B;
    B -- "2. Is Microtask Queue empty?" --> C;
    C -- "Yes" --> B;
    B -- "3. Pick ONE Macrotask" --> D;
    D -- "Move it to stack" --> A;
```

⭐ **Key Takeaway**: A promise's `.then()` will *always* run before a `setTimeout(..., 0)` callback, even if both are ready at the same time, because promises create microtasks.

---

### 2. Memory Management & Garbage Collection

**The Memory Lifecycle**
Application lo memory management 3 stages lo untundhi:
1.  **Allocate**: Manam variables, objects, functions create chesinapudu, JS engine vaatiki memory ni allocate chestundhi. `let x = 10;`
2.  **Use**: Manam aa allocated memory ni read and write chestam. `console.log(x);`
3.  **Release**: Inka avasaram leni memory ni release cheyadam. JavaScript lo ee process automatic ga jaruguthundhi, thanks to the **Garbage Collector (GC)**.

**What is Garbage?**
Oka object ki inka "reachability" lekapothe, adi garbage anamata. Ante, mana code lo unna root (global variables, current running functions) nunchi aa object ni reach avvadaniki దారి lekapothe, adi useless.

**The Mark-and-Sweep Algorithm (High-Level)**
Most modern JS engines ee algorithm ni use chestai. Idi rendu phases lo pani chestundhi:
1.  **Mark Phase**: Garbage Collector, root objects nunchi start ayi, reachable ayina prathi object ni "mark" (tag) chestundhi.
2.  **Sweep Phase**: GC memory antha scan chesi, "mark" leni objects anni "sweep" chesi, aa memory ni free chestundhi.

**Memory Leaks**
Sometimes, manam avasaram leni objects ki reference ni hold chesi unchutham. Ala cheste, Garbage Collector daanini reachable anukuni, sweep cheyadu. Deenine **memory leak** antaru.
*   **Common Cause**: Oka DOM element ki event listener add chesi, aa element ni DOM nunchi remove chesi, kani event listener ni remove cheyadam marchipovadam.

Understanding these concepts helps in writing more performant and robust applications. Let's see the microtask/macrotask difference in code!

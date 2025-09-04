# Section 8: Closures & Scope Deep Dive 🔬

Mawa, manam closures gurinchi Section 6 lo nerchukunnam. Ippudu, avi asal ela pani chestai, vaati practical implications enti, and vaati valla vache common problems (like memory leaks) gurinchi inka deep ga chuddam.

---

### 1. The Lexical Environment: The "How" of Closures

Closure anedhi oka function, adi create ayina scope ni "remember" cheskuntundhi ani cheppukunnam. But *how* does it remember? The answer is the **Lexical Environment**.

*   **The "What"**: JavaScript engine oka function ni create chesinapudu, aa function tho paatu, oka special object ni kuda create chestundhi. Daanine "Lexical Environment" antaru. Ee object lo rendu vishayalu untai:
    1.  **Environment Record**: Function lopala unna local variables anni store cheskuntundhi.
    2.  **Reference to Outer Environment**: Daani parent scope yokka Lexical Environment ki oka link ni store cheskuntundhi.

*   **The "Why"**: Idi `scope chain` ni form chestundhi. Manam oka variable ni access cheyabothunapudu, JS engine mundu current function's environment lo chustundhi. Akkada lekapothe, aa reference tho parent environment lo chustundhi, and so on, until it reaches the global environment.

A **closure** is simply a function bundled with a persistent link to its parent's lexical environment.

**Visualization:**
```mermaid
graph TD
    A[Global Env] --> B[outer() Env];
    B --> C[inner() Env];

    subgraph Global Scope
        A
    end
    subgraph outer() Scope
        B
    end
    subgraph inner() Scope
        C
    end
```
`inner()` eppudu `outer()` environment ki access aiyye untundhi, even if `outer()` has finished executing.

---

### 2. IIFE (Immediately Invoked Function Expression)

*   **The "What"**: An IIFE is a function that is defined and executed immediately right after it's created.
    **Syntax**: `(function() { /* ... */ })();`
    The outer `()` group the function to make it an expression, and the final `()` executes it.

*   **The "Why"**: Before ES6 lo `let` and `const` (block scope) vachai, `var` matrame undedi, adi function-scoped. Global scope lo variables ni pollute cheyakunda, oka **private scope** ni create cheyadaniki unna okate maargam oka function create cheyadam. IIFEs ee pani kosame create chesaru.

---

### 3. The Module Pattern (Revisited)

Ippudu manaku IIFE and Closures gurinchi telusu. Ee renditini kalipithe vachedhe classic **Module Pattern**.

```javascript
const myModule = (function() {
    // This is an IIFE, creating a private scope.

    // --- Private State ---
    // These are inside the closure, so they are private.
    let privateCounter = 0;
    const privateMessage = "This is a secret.";

    // --- Public API ---
    // We return an object. This object's methods have access to the
    // private state because they are closures.
    return {
        increment: () => privateCounter++,
        getMessage: () => privateMessage
    };
})();
```
This pattern was the standard for creating modules with private data before ES6 `import`/`export` became the norm.

---

### 4. Memory Leaks with Closures

*   **The "What"**: A memory leak is when a piece of memory is no longer needed by the application but is not released by the garbage collector, leading to increased memory usage over time.

*   **The "How"**: Closures can accidentally cause memory leaks. A closure maintains a reference to its parent scope. If that scope contains large variables or objects, and the closure itself is long-lived, then those large variables can never be garbage collected, even if they are no longer needed.

**Classic Example: Event Listeners**
Imagine you have a button. You add a click listener to it. That listener function is a closure.
```javascript
function attachListener() {
    const largeObject = new Array(1000000).fill('*'); // A big object

    const myButton = document.getElementById('myBtn');

    // This event listener is a closure. It has a link to its parent scope,
    // which contains `largeObject`.
    myButton.addEventListener('click', function() {
        console.log("Button clicked!");
        // Even though this function doesn't use largeObject, the link exists.
    });
}
```
Now, if you remove `myButton` from the DOM, but you **forget to remove the event listener**, a problem occurs. The event listener still exists in memory, and because it's a closure, it holds a reference to its scope, which in turn holds a reference to `largeObject`. `largeObject` can **never be garbage collected**. This is a memory leak.

**Solution**: Always clean up your event listeners when you are done with an element! `myButton.removeEventListener(...)`.

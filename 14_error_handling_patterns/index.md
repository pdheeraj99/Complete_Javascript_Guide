# Section 6.3: Writing Robust Code (Error Handling & Design Patterns) 🏗️

Mawa, welcome to the final lesson! Ikkada manam code ni just work ayye la kakunda, professional ga, strong ga, maintainable ga ela rayalo nerchukundam. This is what makes a senior developer stand out.

---

### 1. Advanced Error Handling

Manam `try...catch` gurinchi nerchukunnam. Ippudu daaniki konni additions chuddam.

*   **The `finally` block**
    `try...catch` tho paatu, manam `finally` ane block kuda add cheyochu. Ee block lo unna code, `try` block success aina, `catch` block lo error vachina, **pakka execute avuthundhi**.

    **Why is this useful?**
    Cleanup operations kosam. For example, oka file open chesi, daani meedha operations chesi, tarvata aa file ni close cheyali. Ee closing operation ni manam `finally` lo pettొచ్చు, so that error vachina, rakunna, file pakka close avuthundhi.

    ```javascript
    try {
        console.log("Try block: Doing some work...");
        // throw new Error("Something went wrong!"); // Uncomment to see catch block run
    } catch (error) {
        console.log("Catch block: An error occurred:", error.message);
    } finally {
        console.log("Finally block: This runs no matter what. Cleaning up now.");
    }
    ```

*   **Creating Custom Errors**
    Sometimes, a generic `Error` object antha descriptive ga undadu. Manam mana application ki specific ga custom error types create cheskovachu. We do this by extending the built-in `Error` class.

    ```javascript
    class ValidationError extends Error {
        constructor(message) {
            super(message); // Call the parent constructor
            this.name = "ValidationError";
        }
    }
    ```
    Ila cheyadam valla, manam `catch` block lo `if (error instanceof ValidationError)` ani specific errors ni handle cheyochu.

---

### 2. Design Patterns in JavaScript

**What are Design Patterns?**
Design Patterns anevi programming lo common ga vache problems ki, time-tested, reusable solutions (blueprints). Evi direct copy-paste chese code kaadu, kani oka problem ni ela solve cheyalo oka idea or approach isthai.

*   **The Module Pattern**
    Manam Closures section lo deeni gurinchi chusam. Idi ES6 modules raka mundu, private state create cheyadaniki vadina most popular pattern. It uses an **IIFE (Immediately Invoked Function Expression)** and a closure.

    ```javascript
    const myModule = (function() {
        // This is a private variable
        const privateVar = "I am private";

        // This is a private function
        function privateMethod() {
            console.log(privateVar);
        }

        // Return an object that is the public API
        return {
            publicMethod: function() {
                privateMethod();
            }
        };
    })();
    ```
    Ee pattern lo, `privateVar` and `privateMethod` bayata nunchi access cheyalemu. Kevalam `myModule.publicMethod()` matrame access cheyagalam.

*   **The Singleton Pattern**
    *   **The "What"**: Ee pattern, oka class ki **okate okka instance** create ayye la chuskuntundhi, and aa instance ki oka global access point isthundhi.
    *   **The "Why"**: App antha, okate object undali anukune situations lo (e.g., a single database connection, a configuration manager).
    *   **Implementation**: A private instance variable and a static `getInstance` method.

*   **The Observer Pattern**
    *   **The "What"**: Oka object (the "subject") chala vere objects ("observers") yokka list ni maintain chestundhi. Subject state lo emaina change vachinapudu, adi automatic ga anni observers ki notify chestundhi.
    *   **The "Why"**: Idi reactive programming ki foundation. Anni modern frontend libraries/frameworks (React, Vue) ee pattern ni heavily use chestai. For example, React lo state (`useState`) change ayinapudu, aa state ni use cheskune components anni automatic ga re-render avuthai. The state is the "subject", and the components are the "observers".
    *   **Implementation**: A `Subject` class with `subscribe(observer)`, `unsubscribe(observer)`, and `notify()` methods.

---

### Bonus: Error vs. Exception - What's the Difference? 🧠

Idi chala common confusion point. Let's make it crystal clear.

*   **`Error`**: An `Error` is an **object**. It is an instance of JavaScript's built-in `Error` class (or other error classes like `SyntaxError`, `TypeError`, etc.). Ee object lo, problem gurinchi information untundhi (e.g., `error.message`, `error.stack`).

*   **`Exception`**: An "exception" is an **event**, or an **action**. It is the event that occurs when an `Error` object is **`thrown`**. Ee event, normal code flow ni aapi, "exception handler" (`catch` block) kosam vethukuthundhi.

**Simple Analogy: Football Match ⚽**
*   The **`Error` object** is the physical **Red Card** 🟥. It is an object that represents "foul".
*   The **Exception** is the referee **showing the red card** and stopping the game. It is the action that disrupts the normal flow.

**How they work together:**
You `throw` a new `Error("Something bad happened!")`. This action creates an **exception**. The JS engine then pauses and looks for a `catch` block to handle this exception. The `catch` block receives the `Error` object you threw.

Congratulations on reaching the end of the conceptual topics! Let's see the code examples.

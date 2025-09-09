# 🛡️ Phase 6: Robust Error Handling 🛡️

Writing code that works when everything is perfect is easy. Writing code that handles things gracefully when they go wrong is what makes a great developer.

---

### 1. The `try...catch...finally` Block

Manam `try...catch` gurinchi `async/await` lo chusam. Kani daaniki `finally` ane third part kuda undi.

*   **`try`:** Ikkada manam error vache chance unna code ni pedatham.
*   **`catch (error)`:** `try` block lo error vasthe, control ee block ki vastundi. `error` object lo error details untayi.
*   **`finally`:** Ee block lo unna code eppudu run avtundi, `try` block success aina, `catch` block run aina. Idi cleanup operations ki perfect (e.g., closing a file, disconnecting from a database).

```javascript
try {
  console.log("1. Inside try block: Opening a resource...");
  // riskyFunction(); // Let's pretend this function might throw an error
  console.log("2. Risky operation successful.");
} catch (error) {
  console.log("3. Inside catch block: An error occurred!", error.message);
} finally {
  console.log("4. Inside finally block: Closing the resource.");
}
```

---

### 2. The `throw` Statement & The `Error` Object

Manam `throw` keyword tho mana own errors ni create chesi, signal cheyochu. Best practice enti ante, `new Error()` object ni throw cheyadam.

```javascript
function calculateArea(width, height) {
  if (width < 0 || height < 0) {
    // We are throwing a new Error object.
    throw new Error("Width and height must be positive numbers.");
  }
  return width * height;
}
```
`Error` object ki standard properties untayi:
*   **`name`:** The type of the error (e.g., "Error", "SyntaxError", "TypeError").
*   **`message`:** The string message we passed to the constructor.
*   **`stack`:** The "stack trace", which shows where in the code the error occurred. Debugging ki idi chala important.

```javascript
try {
  calculateArea(-10, 5);
} catch (err) {
  console.error("Error Name:", err.name);     // "Error"
  console.error("Error Message:", err.message); // "Width and height must be positive numbers."
  // console.error("Stack Trace:", err.stack); // Shows the full call stack
}
```

---

### 3. Custom Errors

Chala sarlu, manam different types of errors ni different ga handle cheyali anukuntam. For example, "User Not Found" error ni "Invalid Input" error kanna verela handle cheyali. Daanikosam, manam custom error classes ni create cheyochu.

Idi cheyadaniki, manam base `Error` class ni `extend` chestam.

```javascript
// Custom error class for validation errors
class ValidationError extends Error {
  constructor(message) {
    super(message); // Call the parent Error constructor
    this.name = "ValidationError"; // Set the custom error name
  }
}

// Custom error class for API/network errors
class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}
```

Ippudu, manam `catch` block lo `instanceof` operator tho ഏ రకమైన error vachindo check cheyochu.

```javascript
function saveUser(user) {
  if (!user.name) {
    throw new ValidationError("Username is required.");
  }
  // ... network logic that might fail ...
}

try {
  saveUser({});
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation Failed:", error.message);
    // Show a message to the user in the UI
  } else if (error instanceof NetworkError) {
    console.log("Network Failed:", error.message);
    // Retry the network request
  } else {
    console.log("An unexpected error occurred:", error.message);
    // Generic error handling
  }
}
```
Ee pattern tho, mana error handling chala organized ga and powerful ga untundi.

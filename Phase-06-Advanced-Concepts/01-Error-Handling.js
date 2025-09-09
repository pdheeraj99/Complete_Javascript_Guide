// ==================================================================
// 🛡️ Phase 6: Robust Error Handling - Code Examples 🛡️
// ==================================================================

// --- 1. The `try...catch...finally` Block ---
console.log("--- try...catch...finally ---");

function testFinally(shouldThrow) {
  try {
    console.log("Entering the try block.");
    if (shouldThrow) {
      throw new Error("This is a test error.");
    }
    console.log("No error was thrown.");
    // `return` in try will execute, but `finally` still runs before the function truly exits.
    return "Value from try";
  } catch (error) {
    console.error("Caught an error:", error.message);
    return "Value from catch";
  } finally {
    // This block ALWAYS runs, whether there was an error or not.
    // It's perfect for cleanup code.
    console.log("Executing the finally block.");
  }
}

console.log("Running with no error:");
const result1 = testFinally(false);
console.log("Function returned:", result1);

console.log("\nRunning with an error:");
const result2 = testFinally(true);
console.log("Function returned:", result2);
console.log("\n");


// --- 2. Custom Errors ---
console.log("--- Custom Errors ---");

// A custom error for user-related problems
class UserError extends Error {
  constructor(message) {
    super(message); // Pass the message to the parent Error class
    this.name = "UserError"; // Set a custom name for this error type
  }
}

// A custom error for data-related problems
class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}

function getUserById(id) {
  if (typeof id !== 'number') {
    throw new UserError("User ID must be a number.");
  }
  if (id < 0) {
    throw new DatabaseError("Cannot find user with negative ID.");
  }

  // Pretend we found the user
  return { id: id, name: "Mahesh" };
}


// Now we can handle different errors in different ways
function fetchAndDisplayUser(id) {
  try {
    const user = getUserById(id);
    console.log(`Success! User found: ${user.name}`);
  } catch (error) {
    console.error(`An error occurred while fetching user with ID ${id}:`);

    if (error instanceof UserError) {
      // This is a problem with the input, maybe show a message to the user
      console.error("Type: User Input Error.", "Message:", error.message);

    } else if (error instanceof DatabaseError) {
      // This is a server/database problem, maybe log it for developers
      console.error("Type: Database Error.", "Message:", error.message);

    } else {
      // An unexpected error
      console.error("An unknown error occurred:", error);
    }
  } finally {
    console.log("--- User fetch operation complete ---");
  }
}

fetchAndDisplayUser(101);
console.log("\n");
fetchAndDisplayUser("abc"); // This will throw a UserError
console.log("\n");
fetchAndDisplayUser(-1);  // This will throw a DatabaseError
console.log("\n");

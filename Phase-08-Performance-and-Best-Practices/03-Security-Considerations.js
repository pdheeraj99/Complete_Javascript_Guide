// ==================================================================
// 🔒 Phase 8: Security Considerations - Code Examples 🔒
// ==================================================================

// NOTE: These are conceptual examples. Running them in a real browser
// environment would demonstrate their effects more clearly.

// --- 1. Cross-Site Scripting (XSS) Example ---
console.log("--- Cross-Site Scripting (XSS) ---");

// A malicious string from a user
const maliciousComment = "<img src='invalid-image' onerror=\"alert('XSS Attack! Your cookies could be stolen now.');\">";

// VULNERABLE PATTERN: Using .innerHTML
// In a browser, this would execute the onerror script.
// const vulnerableDiv = document.getElementById('comment-section');
// vulnerableDiv.innerHTML = maliciousComment;
console.log("VULNERABLE: Using .innerHTML with user input can lead to XSS.");
console.log("Example:", "element.innerHTML = maliciousComment;");


// SAFE PATTERN: Using .textContent
// This will render the string as plain text, not as HTML.
// const safeDiv = document.getElementById('comment-section');
// safeDiv.textContent = maliciousComment;
console.log("\nSAFE: Using .textContent treats the input as text, not code.");
console.log("Example:", "element.textContent = maliciousComment;");

// Simple escaping function (real-world libraries are more robust)
function escapeHTML(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const escapedComment = escapeHTML(maliciousComment);
console.log("\nEscaped HTML:", escapedComment);
console.log("This escaped string is safe to use with .innerHTML.");
console.log("\n");


// --- 2. The Dangers of `eval()` ---
console.log("--- The Dangers of eval() ---");

const userInput = "2 + 2"; // Harmless input
const maliciousUserInput = "(() => { console.log('This code was executed by eval()!'); return 'malicious'; })()";

// VULNERABLE: `eval` will execute any JavaScript code passed to it.
console.log("VULNERABLE: eval() can execute any code.");
try {
    const result = eval(maliciousUserInput);
    console.log("Result from eval:", result);
} catch (e) {
    console.error(e);
}
console.log("You should almost NEVER use eval().");
console.log("\n");


// --- 3. Safe JSON Parsing ---
console.log("--- Safe JSON Parsing ---");

// A string received from an API
const jsonString = '{"name": "Chiranjeevi", "role": "Actor", "isActive": true}';

// VULNERABLE (and incorrect) way from the past
// const badObject = eval("(" + jsonString + ")");

// SAFE and CORRECT way
try {
    const goodObject = JSON.parse(jsonString);
    console.log("Safely parsed object:", goodObject);
    console.log("User name:", goodObject.name);
} catch (e) {
    console.error("JSON parsing error:", e);
}

// What happens if the string contains code?
const maliciousJsonString = '{"name": "Hacker", "action": "(() => { console.log(\'PWNED!\'); })()"}';
try {
    // JSON.parse() will throw an error because this is not valid JSON.
    // It will NOT execute the code.
    const parsed = JSON.parse(maliciousJsonString);
} catch (e) {
    console.log("\nSAFE: JSON.parse() correctly threw an error for invalid JSON and did not execute code.");
    console.error("Error message:", e.message);
}
console.log("\n");

console.log("🎉 Congratulations! You have completed the entire JavaScript Mastery Roadmap! 🎉");

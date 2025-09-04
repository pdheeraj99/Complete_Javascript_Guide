// ============================================================================
// Section 15: JavaScript Testing Fundamentals - Code Examples
// To run this file: node 23_js_testing/index.js
// ============================================================================

console.log("--- Building a Simple Test Framework from Scratch ---");

// --- The code we want to test ---
// A simple object with some math functions.
const math = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};


// --- Our Testing Framework ---

// 1. The Assertion Library (`expect`)
function expect(actual) {
    return {
        // The `toBe` matcher
        toBe(expected) {
            if (actual !== expected) {
                // If the assertion fails, throw an error!
                throw new Error(`❌ Assertion Failed: Expected ${actual} to be ${expected}`);
            }
        },
        // We could add more matchers here like `toEqual`, `toBeGreaterThan`, etc.
    };
}

// 2. The Test Runner (`test`)
function test(title, callback) {
    console.log(`\nRunning test: "${title}"`);
    try {
        // Execute the test function
        callback();
        // If the callback runs without throwing an error, the test passes.
        console.log(`  ✅ PASS`);
    } catch (error) {
        // If an error is thrown (by our `expect` function), the test fails.
        console.error(`  ❌ FAIL: ${error.message}`);
    }
}


// --- Our Tests ---
// Now, let's use our framework to write some tests!

test("add function should correctly add two numbers", () => {
    // Arrange
    const a = 5;
    const b = 10;
    const expected = 15;

    // Act
    const result = math.add(a, b);

    // Assert
    expect(result).toBe(expected);
});

test("subtract function should correctly subtract two numbers", () => {
    // Arrange
    const a = 10;
    const b = 3;
    const expected = 7;

    // Act
    const result = math.subtract(a, b);

    // Assert
    expect(result).toBe(expected);
});

test("this test is designed to fail", () => {
    // This test will fail, demonstrating our error handling.
    expect(math.add(1, 1)).toBe(3);
});

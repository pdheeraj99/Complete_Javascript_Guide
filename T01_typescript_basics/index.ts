// ============================================================================
// Section T1: TypeScript Basics - Code Examples
// To run this file:
// 1. You need TypeScript installed (`npm install -g typescript`)
// 2. Compile it: `tsc T01_typescript_basics/index.ts`
// 3. Run the generated JS file: `node T01_typescript_basics/index.js`
// ============================================================================

console.log("--- TypeScript Basics Examples ---");

// --- 1. Basic Type Annotations ---
console.log("\n--- 1. Basic Types ---");
let username: string = 'Jules';
let age: number = 30;
let isDeveloper: boolean = true;
let hobbies: string[] = ['coding', 'reading'];
let userProfile: { name: string, age: number } = {
    name: 'Ravi',
    age: 28
};

console.log(`Username: ${username}`);
console.log(`Hobbies: ${hobbies.join(', ')}`);


// --- 2. Type Inference ---
console.log("\n--- 2. Type Inference ---");
// We don't need to write `: number` here. TypeScript infers it.
let score = 100;
console.log(`The type of 'score' is automatically inferred as '${typeof score}'`);


// --- 3. Functions with Types ---
console.log("\n--- 3. Typed Functions ---");

// This function clearly defines its inputs and output.
function add(a: number, b: number): number {
    return a + b;
}
console.log(`add(5, 10) = ${add(5, 10)}`);

// This function doesn't return a value, so its return type is `void`.
function printMessage(message: string): void {
    console.log(`Message: ${message}`);
}
printMessage("Hello TypeScript!");


// --- 4. TypeScript Catching Errors ---
console.log("\n--- 4. Type Errors ---");
console.log("The following lines are commented out because they would cause a compile-time error.");

// ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
// const result = add('5', '10');

// ERROR: Property 'push' does not exist on type 'string'.
// username.push('V2');

// ERROR: Type 'number' is not assignable to type 'string'.
// username = 123;

console.log("TypeScript helps us catch these bugs before we even run the code! ✅");

# 🎤 Phase 1: Functions Fundamentals 🎤

Welcome to the final topic of our foundational phase! Functions anevi JavaScript lo chala critical concept. Avi lekunda manam pedda applications rayalem. A function is a reusable block of code designed to perform a particular task.

---

### 1. Function Declaration & Calling

First, manam function ni "declare" (or define) cheyali, ante "ee function em cheyalo" cheppali. Tarvata, manam daanini "call" (or invoke) chesi, use chesukuntam.

```javascript
// 1. Declaration
function greet() {
  console.log("Hello, welcome to the world of functions! 👋");
}

// 2. Calling the function
greet(); // Output: Hello, welcome to the world of functions! 👋
greet(); // We can call it as many times as we want!
```

---

### 2. Parameters and Arguments

Functions ni inka powerful ga cheyadaniki, manam vaatiki input values ivvachu.

*   **Parameters:** Function definition lo manam specify chese variable names. Ivi placeholders laantivi.
*   **Arguments:** Function ni call chesetappudu manam pass chese actual values.

```javascript
// `name` and `time` are parameters
function greetUser(name, time) {
  console.log(`Good ${time}, ${name}!`);
}

// "Priya" and "Morning" are arguments
greetUser("Priya", "Morning"); // Output: Good Morning, Priya!
greetUser("Kumar", "Evening"); // Output: Good Evening, Kumar!
```

---

### 3. The `return` Statement

Chala sarlu, manaki function nunchi oka value venakki kavali (e.g., calculation result). Daanikosam `return` statement vaadathamu. `return` tarvata function execution aagipotundi.

```javascript
function add(num1, num2) {
  const sum = num1 + num2;
  return sum; // Send the result back
  // console.log("This line will never run"); // `return` tarvata em code execute avvadu
}

const result = add(10, 5); // `add` function call chesi, vachina result ni store cheskuntunnam
console.log(`The result is: ${result}`); // Output: The result is: 15
```
Function emi `return` cheyakapothe, by default adi `undefined` ni return chestundi.

---

### 4. Function Scope (Local vs. Global)

Scope ante "where can I access this variable?".

*   **Global Scope:** Function bayata declare chesina variables. Evi program lo ekkadaina access cheyochu.
*   **Local/Function Scope:** Function lopala declare chesina variables. Evi **only aa function lopala matrame** accessible.

```javascript
const globalVar = "I am global! 🌍";

function testScope() {
  const localVar = "I am local! 🏠";
  console.log(globalVar); // Accessing global variable (Allowed ✅)
  console.log(localVar);  // Accessing local variable (Allowed ✅)
}

testScope();
// Output:
// I am global! 🌍
// I am local! 🏠

console.log(globalVar); // Accessing global variable (Allowed ✅)
// console.log(localVar); // Error! localVar is not defined outside its function scope. (Not allowed ❌)
```
Ee scope rules code ni organized ga unchadaniki and variable name conflicts rakunda chuskovadaniki help chestayi.

---

### 5. Function Declaration vs. Function Expression

Function ni create cheyadaniki rendu common ways unnayi.

**a) Function Declaration:** Manam paina chusina normal way.
```javascript
// Function Declaration
function multiply(a, b) {
  return a * b;
}
```
**b) Function Expression:** Function ni create chesi, oka variable ki assign cheyadam.
```javascript
// Function Expression
const subtract = function(a, b) {
  return a - b;
}; // Semicolon is good practice here

console.log(subtract(10, 3)); // Output: 7
```
**Key Difference: Hoisting**
*   **Function Declarations** are **hoisted**. Ante, manam function ni define cheyakmundu kuda call cheyochu. JavaScript engine vaatini file top ki move chestundi.
*   **Function Expressions** are **NOT hoisted**. Avi variable assignments laantivi, so `let` or `const` rules apply. Declare cheyakmundu call cheste error vastundi.

```javascript
// Hoisting Example
sayHello(); // This works! ✅

function sayHello() {
  console.log("Hello!");
}

// tryToSayBye(); // This will cause a TypeError/ReferenceError! ❌

const tryToSayBye = function() {
  console.log("Bye!");
};
```
Best practice ga, function ni define chesake call cheyadam better to avoid confusion. 👍

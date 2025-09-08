# 🏆 Phase 3: First-Class & Higher-Order Functions 🏆

Ee topic JavaScript yokka flexibility and power ki chala important. Idi functional programming ki foundation anamata.

---

### 1. Functions as First-Class Citizens

JavaScript lo, functions ni "first-class citizens" ga treat chestaru. Ante, functions kuda numbers, strings, or objects lanti values eh. Manam functions tho em cheyochu ante:

*   **Store them in variables or properties:**
    ```javascript
    const greet = function() {
      console.log("Hello!");
    };
    const myObject = { sayHi: greet };
    ```
*   **Pass them as arguments to other functions:**
    ```javascript
    function wrapper(fn) {
      console.log("About to run the function...");
      fn(); // Running the passed-in function
      console.log("...function has been run.");
    }
    wrapper(greet);
    ```
*   **Return them from other functions:**
    ```javascript
    function createGreeter() {
      return function() {
        console.log("I was returned from another function!");
      };
    }
    const myGreeter = createGreeter();
    myGreeter();
    ```

Ee ability valla manam chala dynamic and reusable code rayochu.

---

### 2. Callback Functions

**Callback function** ante oka function ni inko function ki argument ga pass cheyadam, and aa function ni tarvata eppudo "call back" cheyadam.

Idi asynchronous operations (like fetching data from internet, waiting for a timer) lo chala common ga vaadatharu.

```javascript
// `callback` is a function we pass in
function processUserData(userId, callback) {
  console.log(`Fetching data for user ${userId}...`);

  // Simulate a delay (e.g., network request)
  setTimeout(function() {
    const userData = { id: userId, name: "Mahesh Babu" };
    callback(userData); // Data vachaka, callback function ni call cheyali
  }, 2000); // 2 second delay
}

// This is our callback function
function displayUser(data) {
  console.log(`User found! Name: ${data.name}`);
}

// `displayUser` function ni `processUserData` ki callback ga pass chestunnam
processUserData(101, displayUser);
```
Ee example lo, `displayUser` anedi callback. `processUserData` function
tanu pani purti chesukunna (data fetch chesina) tarvata daanini call chestundi.

---

### 3. Higher-Order Functions (HOFs)

Higher-Order Function (HOF) ante chala simple:

> A function that receives another function as an argument, returns another function, or does both.

Ante, HOF anedi functions tho pani chese function anamata.

**Example 1: A function that takes a function (like `Array.map`)**
`Array.map` anedi oka classic HOF. Adi oka function ni argument ga teeskuni, array lo prathi element meeda aa function ni apply chestundi.

```javascript
const numbers = [1, 2, 3, 4];
const double = (n) => n * 2;

const doubledNumbers = numbers.map(double); // `map` is the HOF, `double` is the callback
console.log(doubledNumbers); // [2, 4, 6, 8]
```

**Example 2: A function that returns a function**
Idi powerful patterns ki daari teestundi.

```javascript
function createMultiplier(multiplier) {
  // This HOF returns a new function
  return function(number) {
    return number * multiplier;
  };
}

// Create a function that always doubles
const double = createMultiplier(2);
// Create a function that always triples
const triple = createMultiplier(3);

console.log(double(10)); // Output: 20
console.log(triple(10)); // Output: 30
```
Ee example lo, `createMultiplier` anedi HOF. Adi manaki కావలసినట్టుగా customize chesina kottha functions ni create chesi istundi. Ee concept Closures tho kalisi chala powerful avtundi (adi mana next topic!).

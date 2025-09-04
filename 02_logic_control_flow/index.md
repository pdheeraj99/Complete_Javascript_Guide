# Section 2: Logic, Control Flow & Data Structures ⚙️

Welcome to Section 2! Mawa, ikkada manam mana code ki brain add cheddam. Ante, adi decisions tiskune la, panulani repeat chese la, data ni oka structure lo pette la cheddam. Idhi chala interesting ga untundhi!

---

### 1. Conditional Statements (Code tho Decisions teeskovadam)

Mana code different situations lo different ga behave avvali. Daanike conditions vadatham.

*   **`if`, `else if`, `else`**
    Idi "Okavela idi aithe, ila chey. Lekapothe, ila chey" ani cheppadam lantiది.

    ```javascript
    let weather = 'rainy';

    if (weather === 'sunny') {
        console.log("Let's go to the beach! 🏖️");
    } else if (weather === 'rainy') {
        console.log("Get an umbrella! ☔");
    } else {
        console.log("Let's just stay home. 🏠");
    }
    ```

*   **`switch` Statement**
    Oka variable ki chala possible values unnapudu, `if-else if-else` badulu `switch` vadithe code clean ga untundhi.

    ```javascript
    let day = 'Monday';

    switch (day) {
        case 'Monday':
            console.log("Start of the work week! 😫");
            break; // `break` marchipoku! Lekapothe next case kuda execute avuthundhi.
        case 'Friday':
            console.log("Weekend is almost here! 🎉");
            break;
        default:
            console.log("It's just a regular day.");
    }
    ```
    ❌ **Common Mistake**: `break` statement ni marchipovadam. Idi "fall-through" ane bug ki కారణం avuthundhi.

*   **Ternary Operator (`? :`)**
    Idi simple `if/else` ki oka shortcut anamata.
    `(condition) ? value_if_true : value_if_false;`

    ```javascript
    let age = 20;
    let canVote = (age >= 18) ? 'Yes, you can vote ✅' : 'No, you cannot vote ❌';
    console.log(canVote); // "Yes, you can vote ✅"
    ```

💡 **Fun Fact**: JavaScript lo konni values automatic ga `false` ga treat avuthai. వీటిని "falsy" values antaru. Avi: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`. Migatha anni "truthy" values ye! E.g., `if ('hello')` or `if (1)` will run.

🧠 **Tricky Interview Question**: "What are truthy and falsy values in JavaScript? Give some examples."

---

### 2. Loops (Okate Pani Repeat Cheyadam)

*   **`for` loop**: Enni sarlu repeat cheyalo manaku mundhe telisinappudu idi perfect.
    `for (initialization; condition; increment) { ... }`

    ```javascript
    // Prints numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {
        console.log(`Iteration number ${i}`);
    }
    ```

*   **`while` loop**: Condition `true` ga unnatha sepu loop run avuthune untundhi.
    ```javascript
    let count = 0;
    while (count < 3) {
        console.log("While loop running...");
        count++;
    }
    ```
    ❌ **Common Mistake**: Infinite loop create cheyadam. `while` loop lo condition eppatiki `false` avvakapothe, mee browser or program crash avuthundhi!

*   **`for...of` vs `for...in`**
    *   `for...of`: Oka array lo unna prathi *value* ni teskovadaniki vadatharu. **Idi arrays ki best choice.**
        ```javascript
        const colors = ['red', 'green', 'blue'];
        for (const color of colors) {
            console.log(color);
        }
        ```
    *   `for...in`: Oka object lo unna prathi *key* (or property name) ni teskovadaniki vadatharu.
        ```javascript
        const userProfile = { name: 'Jules', city: 'Hyderabad' };
        for (const key in userProfile) {
            console.log(`${key}: ${userProfile[key]}`);
        }
        ```

---

### 3. Functions (Reusable Code Blocks)

Functions ante oka set of instructions ki manam ichina peru. Oka sari rasi, enni sarlu aina use cheskovachu.

*   **Function Declaration**: `function functionName() { ... }`. Ee type functions ni manam define cheyakmundhe kuda call cheyochu.
*   **Function Expression**: `const functionName = function() { ... }`. Ee functions ni manam define chesaka matrame call cheyagalam.

*   **Parameters vs Arguments 🗣️**:
    *   **Parameters**: Function define chesetappudu manam icche placeholder names (e.g., `name`).
    *   **Arguments**: Function call chesetappudu manam pass chese actual values (e.g., `'Jules'`).

    ```javascript
    // 'name' is a parameter
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }

    greet('Jules'); // 'Jules' is an argument
    ```

*   **Scope (A Quick Look) 🔭**:
    *   Scope ante "where a variable is accessible".
    *   `Global Scope`: Bayata declare chesina variables ekkadaina available.
    *   `Function Scope`: `var` tho function lopala declare cheste, avi aa function ki matrame available.
    *   `Block Scope`: `let` and `const` tho `{}` lopala declare cheste, avi aa block ki matrame available.
    *   *(Deeni gurinchi manam 'Closures & Scope Deep Dive' section lo inka chala deep ga nerchukundam!)*

🧠 **Tricky Interview Question**: "What is the difference between a parameter and an argument in a function?"

---

### 4. Arrays (A List of Items) 📝

*   Arrays ante oka list lo chala values ni store cheyadam.
*   Values different types vi kuda undochu.
*   **Creating an Array**: `const fruits = ['Apple 🍎', 'Banana 🍌', 'Cherry 🍒'];`
*   **Accessing Elements**: Index tho access chestam. Index `0` tho start avuthundhi.
    *   `console.log(fruits[0]); // 'Apple 🍎'`
*   **`.length` property**: Array lo enni items unnayo chepthundhi.
    *   `console.log(fruits.length); // 3`

> **Important Note ➡️**: Arrays anevi chala powerful! వాటితో panulu cheyadaniki JavaScript chala methods isthundhi. Ee methods anni manam next file **`03_array_methods/index.md`** lo, prathi okkati detail ga, examples tho nerchukundam. Get ready for that!

---

### 5. Objects (Data with Labels) 📇

*   Objects tho manam real-world things ni (like a user, a car, a product) key-value pairs ga represent cheyochu.
*   **Creating an Object**:
    ```javascript
    const user = {
        name: 'Siri',
        age: 28,
        isEngineer: true
    };
    ```
*   **Accessing Properties**:
    *   **Dot Notation**: `user.name` (Most common and easy).
    *   **Bracket Notation**: `user['age']` (Useful when the key is in a variable or has special characters like `user['first-name']`).
*   **Functions in Objects (Methods)**: Manam object lo functions ni kuda values ga pettొచ్చు!
    ```javascript
    const person = {
        name: 'Ravi',
        greet: function() {
            // NOTE: `this.name` lanti advanced concepts gurinchi tarvata chuddam.
            // For now, let's just use the variable directly.
            console.log(`Hello from Ravi!`);
        }
    };
    person.greet(); // "Hello from Ravi!"
    ```

🧠 **Tricky Interview Question**: "What is the difference between dot and bracket notation for accessing object properties? When would you use bracket notation?"

---

Next up, the most awaited part: **Array Methods** in detail! See you in the next file. 🚀

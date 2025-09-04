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

*   **Function Declaration**: `function functionName() { ... }`. Ee type functions "hoisted" avuthai, ante file lo ekkada unna, mundhe access cheyochu.
*   **Function Expression**: `const functionName = function() { ... }`. Ee functions hoisted avvavu.

*   **Parameters vs Arguments**:
    *   `Parameters`: Function define chesetappudu manam icche variable names (`name`).
    *   `Arguments`: Function call chesetappudu manam pass chese actual values (`'Jules'`).

    ```javascript
    // 'name' is a parameter
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }

    greet('Jules'); // 'Jules' is an argument
    ```

*   **Scope (Koncham Deep ga)**
    Mana `01-fundamentals.md` lo cheppinattu, scope ante "where variables are accessible".
    ```mermaid
    graph TD
        A[Global Scope] --> B{Function Scope};
        B --> C{Block Scope};
    ```
    *   **Global Scope**: Bayata declare chesina variables ekkadaina available untai.
    *   **Function Scope**: `var` tho function lopala declare cheste, avi aa function ki matrame available.
    *   **Block Scope**: `let` and `const` tho `{}` lopala declare cheste, avi aa block ki matrame available. Idi chala useful.

🧠 **Tricky Interview Question**: "What is the difference between a function declaration and a function expression? Explain with respect to hoisting."

---

### 4. Arrays (Data List)

Arrays ante oka list lo chala values ni store cheyadam. Values different types vi kuda undochu.

*   **Creating an Array**: `const fruits = ['Apple 🍎', 'Banana 🍌', 'Cherry 🍒'];`
*   **Accessing Elements**: Index tho access chestam. Index `0` tho start avuthundhi.
    `console.log(fruits[0]); // 'Apple 🍎'`
*   **`.length` property**: Array lo enni items unnayo chepthundhi.
    `console.log(fruits.length); // 3`

> **Important Note**: Arrays anevi chala powerful! వాటితో panulu cheyadaniki JavaScript chala methods isthundhi (`push`, `pop`, `map`, `filter`, etc.). Ee methods anni manam next file **`02-array-methods.md`** lo, prathi okkati detail ga, examples tho nerchukundam. Get ready for that!

---

### 5. Objects (Data with Labels)

Objects tho manam real-world things ni (like a user, a car, a product) key-value pairs ga represent cheyochu.

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

*   **Methods in Objects**: Object lopala function unte, daanini method antaru.
    ```javascript
    const person = {
        name: 'Ravi',
        greet: function() {
            console.log(`Hello from ${this.name}!`);
        }
    };
    person.greet(); // "Hello from Ravi!"
    ```
*   **`this` keyword (A Small Intro)**: Oka method lopala `this` ante, aa method ye object ki chendhinadho, aa object anamata.
    > **Note**: `this` keyword JavaScript lo oka pedda and koncham confusing topic. Deeni gurinchi manam **Section 6: Advanced & Conceptual Topics** lo chala detail ga matladukundam. For now, just remember it refers to the object itself in this context.

🧠 **Tricky Interview Question**: "What is the difference between dot and bracket notation for accessing object properties? When would you use bracket notation?"

---

Next up, the most awaited part: **Array Methods** in detail! See you in the next file. 🚀

# Section 5.2: Modules and Classes 🏛️

Mawa, ee section lo manam large applications build cheyadaniki fundamental ayina rendu pedda concepts nerchukundam: Modules and Classes.

---

### Part 1: ES6 Modules (`import`/`export`)

**The "Why": The Problem of Global Scope Pollution**
Mundu rojullo, manam multiple JS files ni HTML lo include cheste, anni files lo unna variables, functions anni `window` object (global scope) lo vachi padipoyevi.

**Problem**: Rendu different files lo `const user = ...` ani okate peru tho variable unte, రెండో file, modati file variable ni overwrite chesedi. Idi pedda pedda projects lo chala bugs ki కారణం ayyedi.

**Solution**: Modules! Prathi JS file ni oka "module" ga treat cheyadam. Prathi module ki daani **private scope** untundhi. Bayata nunchi emi access cheyaleru, and lopala nunchi bayataki emi leak avvadu... unless manam explicit ga chepthe thappa.

**How it Works: `export` and `import`**

*   **`export` (File nunchi bayataki pampadam)**
    Manam oka file lo unna functionality ni vere files ki available cheyalante, `export` vadatham. Rendu rakalu unnai:

    1.  **Named Exports**: Oka file nunchi enni aina export cheyochu.
        ```javascript
        // In utils.js
        export const PI = 3.14;
        export function greet(name) { return `Hello, ${name}`; }
        ```
    2.  **Default Export**: Oka file ki **okate** default export untundhi. Idi aa file yokka "main" export anamata.
        ```javascript
        // In user.js
        export default class User { /* ... */ }
        ```

*   **`import` (File loki aahvaninchadam)**
    Vere file lo export chesina daanini import cheskovadaniki `import` vadatham.

    1.  **Importing Named Exports**: `{}` braces vadali, and perlu exactly match avvali.
        ```javascript
        import { PI, greet } from './utils.js';
        ```
    2.  **Importing a Default Export**: Braces avasaram ledhu, and manam manaku nachina peru pettukovachu.
        ```javascript
        import MyUserClass from './user.js';
        ```

⭐ **Important Note for Browsers**: HTML file lo modules ni use chesetappudu, `<script>` tag ki `type="module"` ani add cheyadam marchipokandi!
`<script type="module" src="main.js"></script>`

---

### Part 2: Classes

**The "Why": Cleaner Object-Oriented Programming**
Mundu rojullo, JS lo objects create chesi, inheritance handle cheyalante "constructor functions" and "prototypes" tho chala circus cheyalsi vachedi. Ee syntax chala confusing ga undedi, especially vere languages (like Java, C++, Python) nunchi vachina developers ki.

**Solution**: Classes! ES6 lo vachina `class` syntax, ee prototype system meedha build chesina oka beautiful "syntactic sugar". Ante, background lo జరిగేది adhe, kani manam rase code chala clean ga, easy ga, and familiar ga untundhi.

*   **The `class` Keyword & `constructor`**
    `constructor` anedhi oka special method. `new MyClass()` ani class ni instantiate chesinapudu, ee constructor automatic ga call avuthundhi.

    ```javascript
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        // Method
        introduce() {
            console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
        }
    }

    const person1 = new Person('Ravi', 30);
    person1.introduce();
    ```

*   **Inheritance with `extends` and `super`**
    Oka class, inko class yokka properties and methods ni inherit cheskovachu.
    *   `extends`: To specify the parent class.
    *   `super`: Parent class constructor ni or methods ni call cheyadaniki. Child class constructor lo `this` ni use chese mundhu `super()` ni call cheyadam mandatory.

    ```javascript
    class Engineer extends Person {
        constructor(name, age, field) {
            // Call the parent constructor first!
            super(name, age);
            this.field = field;
        }

        work() {
            // Call parent method
            super.introduce();
            console.log(`I work in the ${this.field} field.`);
        }
    }

    const engineer1 = new Engineer('Sita', 25, 'Software Development');
    engineer1.work();
    ```

*   **Getters and Setters**
    Evi object properties ni read cheyadaniki (`get`), write cheyadaniki (`set`) special methods. Evi properties meedha manaku ekkuva control isthai.

Let's see these concepts in action in the `.js` files.

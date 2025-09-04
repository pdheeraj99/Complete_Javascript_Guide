# Section 7: Advanced Functions 🧠

Mawa, ee section lo manam JavaScript lo functions ni inko level ki theeskeldam. JavaScript lo functions ni "first-class citizens" antaru. Ante, manam functions ni variables laaga, arguments laaga, and return values laaga treat cheyochu. Ee capability, chala powerful functional programming patterns ki daari theesthundhi.

---

### 1. Higher-Order Functions (HOFs) 🧑‍🍳

*   **The "What"**: A Higher-Order Function is a function that does at least one of the following:
    *   Takes one or more functions as arguments.
    *   Returns a function as its result.
*   **The "Why"**: HOFs allow us to abstract over actions, not just values. They help us write more generic, reusable, and composable code.
*   **Analogy**: A chef is a HOF. You give them ingredients (values) and a recipe (a function), and they produce a dish (the result).
*   **You've already used them!** Mana `Array.prototype.map`, `filter`, and `reduce` methods HOFs ye!

---

### 2. Function Composition 🔗

*   **The "What"**: Function Composition anedhi, rendu or ekkuva functions ni combine chesi, oka kotha, powerful function ni create cheyadam.
*   **Analogy**: Think of it like a series of pipes - the output of one function flows directly into the input of the next: `f(g(x))`.
*   **The "Why"**: Idi manalni chala chinna, reusable, "building block" functions rayadaniki encourage chestundhi.

**Example**:
```javascript
const add5 = x => x + 5;
const multiplyBy2 = x => x * 2;

// We want to first add 5, then multiply by 2.
// Without composition:
const resultWithoutCompose = multiplyBy2(add5(10)); // 30

// With a compose utility:
const compose = (f, g) => x => f(g(x));
const add5AndMultiplyBy2 = compose(multiplyBy2, add5);
const resultWithCompose = add5AndMultiplyBy2(10); // 30
```

---

### 3. Currying 🍛

*   **The "What"**: Currying is the process of transforming a function that takes multiple arguments (e.g., `fn(a, b, c)`) into a sequence of functions that each take a single argument (e.g., `fn(a)(b)(c)`).
*   **The "Why"**: Currying manaku specialized functions ni create cheyadaniki help chestundhi. Manam oka function ki konni arguments ni "pre-load" or "pre-configure" chesi, oka kotha function ni create cheyochu.
*   **Analogy**: Like a machine that you configure step-by-step. First you set setting `a`, then it gives you a new machine that you can configure with setting `b`, and so on.

**Example**:
```javascript
// A normal function
const add = (a, b) => a + b;

// A curried version of the same function
const curriedAdd = a => b => a + b;

// How to use it:
const add10 = curriedAdd(10); // We created a new, specialized function that adds 10 to any number.

console.log(add10(5));  // 15
console.log(add10(20)); // 30
```

---

### 4. Partial Application 🍕

*   **The "What"**: Partial Application kuda Currying laantide. It refers to the process of fixing a number of arguments to a function, producing another function with fewer arguments.
*   **The "Why"**: The goal is the same as currying: create specialized functions from more general ones.
*   **Analogy**: Like ordering a pizza but pre-selecting the base and sauce. You get back a "half-ordered" pizza, and you only need to decide on the toppings later.
*   **Difference from Currying**:
    *   **Currying** always produces a sequence of one-argument functions.
    *   **Partial Application** can fix *any number* of arguments at once.
*   JavaScript lo `bind` method tho partial application chala easy ga cheyochu.

**Example**:
```javascript
function multiply(a, b, c) {
    return a * b * c;
}

// We are "partially applying" the first argument `a` with the value 2.
// The first argument to .bind() is the `this` context, which we don't need here, so it's `null`.
const multiplyBy2 = multiply.bind(null, 2);

// Now, multiplyBy2 is a new function that takes two arguments (b and c).
console.log(multiplyBy2(5, 10)); // 2 * 5 * 10 = 100
```
These functional programming concepts are powerful tools for writing clean, declarative, and reusable code. Let's see them in action!

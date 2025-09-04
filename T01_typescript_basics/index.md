# Section T1: Welcome to TypeScript! 🔷

Mawa, welcome to a new, powerful chapter in your developer journey: **TypeScript**!

---

### 🤔 What is TypeScript?

*   **TypeScript (TS)** anedhi, JavaScript ki oka **"superset"**.
*   Ante, **all valid JavaScript code is also valid TypeScript code**.
*   TS adds one major, game-changing feature to JavaScript: **Static Typing**.

*   **Analogy: Building with LEGOs** 🧱
    *   **JavaScript**: Is like building with LEGOs freely. You can connect any piece to any other piece. Sometimes it works, sometimes it breaks unexpectedly.
    *   **TypeScript**: Is like building with a LEGO set that comes with a **blueprint** (the types). The blueprint prevents you from putting a wheel where a window should go, catching your mistake *before* you build the whole thing.

---

### ✨ Key Benefits of TypeScript

*   **Fewer Bugs 🐛**:
    *   TS catches common errors during development *before* you even run the code.
    *   For example: typos in variable names, or calling a function with the wrong type of argument (`add('hello', 5)`).

*   **Better Readability & Maintainability 📖**:
    *   Types act as documentation. It's much easier for you (and your teammates) to understand what kind of data a function expects and what it will return.

*   **Amazing Developer Experience (DX) 🔥**:
    *   Code editors like VS Code can use the type information to provide incredible autocompletion, suggestions, and real-time error checking.

---

### ✍️ Basic Types

TypeScript lo, manam variable tarvata colon (`:`) petti, daani type ni specify chestam.

*   `let name: string = 'Jules';`
*   `let age: number = 30;`
*   `let isDeveloper: boolean = true;`
*   `let hobbies: string[] = ['coding', 'reading'];` (This is an array of strings)
*   `let user: { name: string, age: number } = { name: 'Ravi', age: 28 };` (This is an object with a specific shape)

---

### 🧠 Type Inference

*   Good news! Manam prathi sari type ni rayakkarledu.
*   TypeScript is smart. If you assign a value when you declare a variable, TS can often **infer** the type automatically.
*   `let newAge = 25;` // TS knows this is a `number`, you don't need to write `: number`.

---

###  फंक्शन (Functions) in TypeScript

*   Manam function parameters ki and, importantly, function yokka **return value** ki kuda types add cheyochu.
*   This is extremely useful.

```typescript
// This function takes two numbers and is guaranteed to return a number.
function add(a: number, b: number): number {
    return a + b;
}

// This function doesn't return anything, so its return type is `void`.
function printMessage(message: string): void {
    console.log(message);
}
```

---

### ⚙️ Compiling TypeScript

*   Browsers don't understand TypeScript directly.
*   Manam mana `.ts` files ni, plain `.js` files ga convert cheyali. Ee process ni **transpilation** antaru.
*   Ee pani cheyadaniki manam TypeScript Compiler (`tsc`) ane tool ni use chestam.
*   Manam terminal lo `tsc myFile.ts` ani run cheste, adi `myFile.js` ane file ni create chestundhi.

Let's see these basic types in action in `index.ts`!

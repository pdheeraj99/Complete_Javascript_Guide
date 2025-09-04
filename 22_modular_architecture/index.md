# Section 13: Modular Architecture 🏛️

Mawa, manam ES6 modules gurinchi nerchukunnam. Ippudu, aa modules ni use chesi, pedda applications ni efficient ga, performant ga ela build cheyalo chuddam.

---

### 1. The Problem: Large JavaScript Bundles

Modern web development lo, manam chala JS files (modules) rastam. App ni deploy chese mundhu, **bundlers** ane tools (like Webpack, Vite, or Parcel) ee files annitini theeskuni, combine chesi, oka single, pedda JS file (`bundle.js`) ga create chestai.

**The Problem**:
User mana website ni open chesinapudu, ee pedda `bundle.js` file antha (e.g., 2MB) download cheyalsi vasthundhi. Kani maybe, user ki first page choodataniki kevalam 200KB code matrame avasaram. Migatha 1.8MB code antha app lo vere sections ki (like settings page, admin dashboard, etc.) sambandhinchinadi avvochu.

User ki avasaram leni code antha mundhe download cheyinchadam valla, website yokka **initial load time** chala slow aipothundhi.

---

### 2. The Solution: Code Splitting

**The "What"**:
Code Splitting anedhi, ee pedda bundle file ni, chala chinna chinna "chunks" ga break chese process.

**The "Why"**:
The main benefit is that we can then **load these chunks on demand**, only when the user actually needs them.
*   User opens the homepage -> only homepage chunk is loaded.
*   User navigates to the profile page -> profile page chunk is loaded in the background.

Ee approach tho, initial load time dramatically improve avuthundhi. User experience chala better ga untundhi.

---

### 3. The "How": Dynamic Imports `import()`

Static `import ... from ...` statements module yokka top level lo matrame rayagalam, and avi page load ayinapude load avuthai. Mari code ni on-demand ga ela load cheyali?

The answer is **Dynamic Imports!**

**The "What"**:
Dynamic `import('path/to/module')` anedhi oka function la pani chestundhi.
1.  Deenini manam code lo **ekkadinaina** call cheyochu (e.g., oka `if` block lopala, or oka event listener lopala).
2.  Idi oka **Promise** ni return chestundhi. Aa promise, module load ayyaka, aa module yokka contents tho resolve avuthundhi.

**The "Why"**:
Idi code splitting ki native JavaScript mechanism. Bundlers like Webpack, `import()` syntax ni choodagane, automatic ga aa module ni oka separate chunk ga split chestai.

**Example**:
Imagine we have a module `greetings.js` that has a function we only need when a button is clicked.

**`greetings.js`**:
```javascript
export function sayHello() {
    alert("Hello, Mawa!");
}
```

**`main.js`**:
```javascript
const myButton = document.getElementById('myBtn');

myButton.addEventListener('click', () => {
    // The module is only downloaded and parsed WHEN the button is clicked.
    import('./greetings.js')
        .then(module => {
            // The resolved value is an object containing the module's exports
            module.sayHello();
        })
        .catch(err => {
            console.error("Failed to load module", err);
        });
});
```
Using `async/await`, this becomes even cleaner:
```javascript
myButton.addEventListener('click', async () => {
    try {
        const module = await import('./greetings.js');
        module.sayHello();
    } catch (err) {
        console.error("Failed to load module", err);
    }
});
```
This pattern is the backbone of modern, performant web applications. Let's see it in action.

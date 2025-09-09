# ✂️ Phase 2: String Manipulation ✂️

Manam Phase 1 lo strings ni primitive data type ga chusam. Kani JavaScript lo strings chala powerful. Avi chala useful built-in methods tho vastayi. Let's explore them!

---

### 1. Common String Methods

| Method | Description | Example |
| :--- | :--- | :--- |
| `length` | (Property) String yokka length ( పొడవు ) ni istundi. | `'hello'.length` → 5 |
| `charAt(index)` | Specific index lo unna character ni istundi. | `'hello'.charAt(0)` → 'h' |
| `slice(start, end)` | String lo oka portion ni extract chesi, kottha string ga istundi. | `'hello'.slice(1, 4)` → 'ell' |
| `substring(start, end)` | `slice` laantide, kani negative indexes ni handle cheyadu. | `'hello'.substring(1, 4)` → 'ell' |
| `indexOf(substr)` | Oka substring yokka first occurrence index ni istundi. Leka pothe `-1` istundi. | `'hello world'.indexOf('o')` → 4 |
| `replace(search, new)` | Oka substring ni kottha substring tho replace chestundi. (Only the first match) | `'hello world'.replace('world', 'JS')` |
| `toUpperCase()` | String anthaటినీ pedda aksharaloki marchutundi. | `'hello'.toUpperCase()` → 'HELLO' |
| `toLowerCase()` | String anthaటినీ chinna aksharaloki marchutundi. | `'HELLO'.toLowerCase()` → 'hello' |
| `trim()` | String ki mundu and venaka unna whitespace ni remove chestundi. | `'  hello  '.trim()` → 'hello' |
| `split(separator)` | Oka string ni separator aadharanga **array of strings** ga vidagottutundi. | `'a,b,c'.split(',')` → `['a', 'b', 'c']` |

**`join(separator)`** anedi array method, kani `split` ki opposite ga pani chestundi. Array of strings ni kalipi oka single string ga chestundi.
`['a', 'b', 'c'].join('-')` → `'a-b-c'`.

---

### 2. Template Literals (A Quick Recap)

Manam Phase 1 lo chusinattu, backticks (`` ` ``) tho create chese strings chala powerful. Veetini template literals antaru.

1.  **String Interpolation:** Variables ni direct ga string lo embed cheyochu.
    ```javascript
    const name = "Mahesh";
    const greeting = `Hello, ${name}! Welcome back.`; // Clean and readable
    ```
2.  **Multi-line Strings:** Easy ga multiple lines lo strings rayochu.
    ```javascript
    const multiLine = `This is line one.
    This is line two.`;
    ```

---

### 3. String Immutability (చాలా ముఖ్యం!)

Idi chala important concept: **JavaScript lo strings are immutable**. Ante, okasari oka string create chesaka, daanini **change cheyalem**.

```javascript
let myString = "Hello";

// Manam ilaga cheyalem:
// myString[0] = "J"; // This will NOT work! No error, but no change either.

console.log(myString); // Output: "Hello"
```

Paina chusina methods (`replace`, `toUpperCase`, etc.) original string ni change cheyavu. Avi operation perform chesi, **oka kottha string ni return chestayi**.

```javascript
let message = "Welcome to JavaScript";
let newMessage = message.replace("JavaScript", "the Future");

console.log(message);     // "Welcome to JavaScript" (Original is unchanged)
console.log(newMessage);  // "Welcome to the Future" (New string is created)
```
Value ni update cheyali anukunte, aa variable ki kottha string ni re-assign cheyali.
`message = message.replace("JavaScript", "the Future");`

---

### 4. Regular Expressions (Regex) Basics 🔍

Regular Expressions (or Regex) anevi text lo patterns ni search cheyadaniki, match cheyadaniki vaade oka powerful tool. Idi chala pedda topic, kani basic idea chuddam.

Regex ni slashes (`/pattern/`) madhya rayali.

```javascript
const text = "The rain in SPAIN stays mainly in the plain.";

// 'replace' method lo regex vaadadam
// 'g' flag ante "global" - anni matches ni replace cheyi
// 'i' flag ante "case-insensitive" - pedda/chinna aksharalu teda lekunda chudu
let result = text.replace(/ain/gi, "AIN");
// Output: "The rAIN in SP-AIN stays mAINly in the plAIN."
```
Ee example `ain` ane pattern (case-insensitive ga) ekkadunna, daanini `AIN` tho replace chestundi. Regex anedi validation (email, phone number) lanti chotla chala useful. Manam tarvata deeni gurinchi inka nerchukundam.

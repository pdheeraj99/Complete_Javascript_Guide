# Section 3: JavaScript in the Browser: The DOM 🌐

Mawa, ippati varaku manam JavaScript core concepts nerchukunnam. Ippudu aa knowledge ni use chesi, web pages ni life ivvadam nerchukundam! Welcome to the DOM.

### What is the DOM? (DOM ante enti?)

DOM ante **D**ocument **O**bject **M**odel. Browser oka HTML file ni load chesinappudu, adi aa HTML code ni oka object la convert chestundhi. Ee object structure, oka tree la untundhi. Prathi HTML element, aa tree lo oka "node" (or "branch") anamata.

**How it Works (The Deep Dive):**
`HTML Source Code` ➡️ `Browser Parser` ➡️ `DOM Tree (Object)`

JavaScript ee DOM tree ni chadavagalguthundhi and modify cheyagalguthundhi. Ante, manam JS tho:
*   HTML elements ni add cheyochu, delete cheyochu.
*   Vaati content ni, styles ni, attributes ni change cheyochu.
*   User actions (like clicks, scrolls) ki respond avvochu.

**Example Visualization:**
Let's say we have this HTML:
```html
<body>
  <h1>Welcome</h1>
  <p>This is a paragraph.</p>
</body>
```
The DOM tree for this would look something like this:
```mermaid
graph TD
    A[document] --> B[body];
    B --> C[h1];
    C --> D[text: "Welcome"];
    B --> E[p];
    E --> F[text: "This is a paragraph."];
```

---

### Selecting Elements (HTML lo Elements ni Pattukovadam)

DOM ni manipulate cheyalante, mundu manaku kavalsina element ni select cheskovali. Daaniki ee methods unnai:

*   **The Old Ways:**
    *   `getElementById('id')`: Oka specific ID unna element ni select chestundhi. Chala fast.
    *   `getElementsByTagName('p')`: Anni `<p>` tags ni theeskuntundhi.
    *   `getElementsByClassName('my-class')`: Anni `my-class` aney class unna elements ni theeskuntundhi.

*   **The Modern, Powerful Way (Use these!):**
    *   ⭐ `querySelector('css-selector')`: CSS lo laaga select cheyochu. For example, `'#myId'`, `'.myClass'`, `'p'`. Idi match aina *first* element ni matrame isthundhi.
    *   ⭐ `querySelectorAll('css-selector')`: Match aina *anni* elements ni isthundhi.

**Deep Dive: `HTMLCollection` (Live) vs. `NodeList` (Static) 🧠**
Idi chala important, tricky interview question kuda!
*   `getElementsBy...` (TagName, ClassName) methods `HTMLCollection` ni isthai. Idi **live**, ante DOM lo ಏನಾದರೂ change aithe (e.g., kotha element add aithe), ee collection automatic ga update avuthundhi.
*   `querySelectorAll` `NodeList` ni isthundhi. Idi **static**, ante oka "snapshot" laantidi. Idi create chesina tarvata DOM lo changes jarigina, idi update avvadu. Most of the time, `NodeList` is more predictable and easier to work with.

---

### Manipulating Elements (Pattukunna Elements ni Marchadam)

*   **Changing Content:**
    *   `element.textContent`: Kevalam text ni matrame change chestundhi. HTML tags ni plain text la చూపిస్తుంది. **This is safe and fast.**
    *   `element.innerHTML`: Element lopala unna HTML content ni change chestundhi.
    *   ⚠️ **Security Warning**: User input ni direct ga `innerHTML` lo pettakandi! Ala cheste **Cross-Site Scripting (XSS)** attacks jaragavachu. Hackers mee page lo వాళ్ల script ni inject cheyagalaru. Use `textContent` whenever possible.

*   **Changing Styles:**
    *   `element.style.property = 'value'`: `element.style.color = 'blue'; element.style.fontSize = '18px';` (Note: CSS properties like `font-size` become `fontSize` in JS - camelCase).
    *   **Better Way**: Chala styles change cheyalante, oka CSS class create chesi, aa class ni JS tho add or remove cheyadam better practice. `element.classList.add('active');` or `element.classList.remove('active');`

*   **Modifying Attributes:**
    *   `element.getAttribute('src')`: Attribute value ni theeskovadaniki.
    *   `element.setAttribute('src', 'new-image.jpg')`: Attribute value ni set cheyadaniki.
    *   `element.removeAttribute('disabled')`: Attribute ni remove cheyadaniki.

---

### Creating and Deleting Elements

*   `document.createElement('div')`: Oka kotha element ni create chestundhi (kani inka page lo add avvadu).
*   `parentElement.appendChild(newElement)`: Create chesina element ni, oka parent ki chivari child ga add chestundhi.
*   `element.remove()`: Element ni direct ga DOM nunchi remove chestundhi (Modern way).
*   `parentElement.removeChild(childElement)`: Parent nunchi child ni remove chestundhi (Old way).

**Deep Dive: Modern & Easier Methods**
`appendChild` kanna better, more intuitive methods ippudu vachai:
*   `parent.append(el1, el2)`: Chivaraga add chestundhi, multiple items ni okesari add cheyochu.
*   `parent.prepend(el1, el2)`: Mundhu add chestundhi.
*   `element.before(el)`: Element ki mundhu add chestundhi.
*   `element.after(el)`: Element ki tarvata add chestundhi.

Next, `03-dom-manipulation.html` and `.js` files lo veeti examples chuddam. Then we will move to the most interesting part: Events!

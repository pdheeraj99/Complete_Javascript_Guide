# ⚡ Phase 8: Performance Optimization ⚡

Fast and responsive applications lead to happy users. Ee topic lo manam code performance ni improve cheyadaniki konni key techniques nerchukundam.

---

### 1. Thinking About Efficiency (Big O Notation)

Big O Notation anedi oka algorithm yokka efficiency (time or space) input size perige కొద్దీ ela maarutundo cheptundi. Idi oka high-level idea.

*   **O(1) - Constant Time:** Input size entha unna, time okate laaga untundi. Chala fast.
    *   Example: `array[0]` (accessing an array element by index), `map.get(key)`.
*   **O(n) - Linear Time:** Input size perigite, time kuda proportionally perugutundi.
    *   Example: `for` loop tho array lo prathi element ni chudatam.
*   **O(n²) - Quadratic Time:** Input size perigite, time exponentially perugutundi. Chala slow for large inputs.
    *   Example: Nested `for` loop (prathi element ki, malli antha array ni loop cheyadam).

**Practical Tip:** Data lookups kosam, Objects or Maps (`O(1)`) anevi Arrays (`O(n)`) kanna chala fast ga untayi.

---

### 2. Debouncing and Throttling

User chala fast ga events ni trigger chesinappudu (like typing in a search bar, resizing window), manam aa event handler function ni prathi saari run cheste, app slow aipotundi. Ee problem ni `debounce` and `throttle` solve chestayi.

#### Debouncing
Debouncing ante, oka function call ni delay chesi, user event ni trigger cheyadam aapesina tarvata, kontha "quiet" time tarvata matrame function ni run cheyadam.

*   **Use Case:** Search bar. User type chestunnappudu prathi character ki API call cheyakunda, user type cheyadam aapesina 500ms tarvata okka API call matrame cheyali.

![Debounce Diagram](https://i.imgur.com/yFFwT18.png)

#### Throttling
Throttling ante, oka function ni specified time period lo okkasari kanna ekkuva run avvakunda restrict cheyadam.

*   **Use Case:** Scrolling. User scroll chestunnappudu, prathi pixel ki animation run cheyakunda, prathi 100ms ki okkasari matrame run cheyali.

![Throttle Diagram](https://i.imgur.com/32G1uL0.png)

---

### 3. Lazy Loading & Code Splitting

Ee technique yokka main goal enti ante, app start ayinappudu antha code ni okesari load cheyakunda, avasaramainappudu matrame load cheyadam. Idi initial page load time ni dramatically improve chestundi.

Manam Phase 7 lo nerchukunna **dynamic `import()`** anedi code splitting ki main tool.

```javascript
// Don't do this for a large library:
// import largeLibrary from './large-library.js';

const button = document.getElementById('show-chart-btn');

button.addEventListener('click', () => {
  // Load the large charting library only when the user clicks the button
  import('./chart-library.js')
    .then(ChartModule => {
      ChartModule.drawChart();
    })
    .catch(err => console.error("Failed to load chart library", err));
});
```
Ee approach tho, user aa chart button click cheyanapothe, aa `chart-library.js` anedi asalu download eh avvadu, data and time save avtundi. Modern frameworks like React, Vue, and Angular lo idi built-in feature ga vastundi.

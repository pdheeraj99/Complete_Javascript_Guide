# Section 11: Advanced Async Patterns 🚦

Mawa, manam `async/await` tho async operations ni handle cheyadam nerchukunnam. Ippudu, aa async functions ni *ela*, *eppudu*, and *entha frequent ga* call cheyalo control chese konni powerful patterns chuddam. Evi UI development lo performance optimization ki chala crucial.

---

### 1. Debouncing

**The "What"**:
Debouncing is a pattern where you ensure that a function is not called again until a certain amount of time has passed *without it being called*. Prathi sari function call ayinapudu, timer reset avuthundhi.

**The "Why" / Analogy**:
Think of an elevator door. Okasari button nokkagane door close avvadu. Adi konni seconds wait chestundhi, inkeveraina vastaremo ani. Ee lopu inkokaru button nokkithe, aa timer malli reset avuthundhi. "Quiet period" (evaru button nokkakunda unna time) tarvate door close avuthundhi.

**Use Case**:
*   **Search Bar**: User search bar lo type chestunnapudu, prathi keystroke ki API call pampadam waste. User type cheyadam aapi, oka 300ms wait chesaka, appudu API call pampithe chalu. Debouncing is perfect for this.
*   Window resize events.

---

### 2. Throttling

**The "What"**:
Throttling is a pattern where you ensure that a function is called **at most once** in a specified time interval.

**The "Why" / Analogy**:
Think of a person who can only send one text message every 10 seconds. Even if you give them 5 messages to send at once, they will send the first one immediately, and then wait 10 seconds before sending the next one, regardless of how many more are waiting.

**Use Case**:
*   **Scroll Events**: User scroll chestunnapudu, scroll event hundreds of times per second fire avuthundhi. Daani meedha depend ayina function (e.g., to show an animation) antha frequent ga run avasaram ledhu. Daanini throttle chesi, prathi 100ms ki okasari run ayye la cheste, performance chala improve avuthundhi.
*   Button clicks to prevent double-submission.

**Debounce vs. Throttle**:
*   **Debounce**: Calls the function only *after* a period of inactivity. (Search bar)
*   **Throttle**: Calls the function at a regular interval *during* activity. (Scrolling)

---

### 3. Async Generators

**The "What"**:
An async generator is a combination of an `async` function and a `generator` (`function*`). It allows you to use `await` inside a generator. Evi `yield` chese values ni manam asynchronously consume cheyochu.

**Syntax**: `async function* myAsyncGenerator() { ... }`

**The "Why"**:
They are perfect for representing a **"stream" of asynchronous data**.

*   **Use Case**: Imagine you need to fetch data from an API that has pagination (multiple pages). Okate sari 100 pages fetch cheyadam badulu, manam oka async generator create chesi, adi okko page ni `await fetch(...)` chesi, `yield` chesela cheyochu. Consumer of this generator can just loop over it, and get the pages one by one as they become available.

**`for await...of` Loop**:
Async generators (and other async iterables) ni consume cheyadaniki, ee special loop syntax undi. Idi prathi `yield` chesina promise resolve ayye varaku wait chesi, aa value ni manaku isthundhi.

```javascript
// Example of consuming an async generator
async function consumeStream() {
    for await (const dataPage of myAsyncDataStream()) {
        console.log("Received data page:", dataPage);
    }
}
```
This is a very elegant way to handle streams of data. Let's see these patterns in the code examples!

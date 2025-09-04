# Section 9: Advanced Events (Delegation & Custom Events) 🎯

Mawa, manam event bubbling gurinchi nerchukunnam. Ippudu aa knowledge ni use chesi, oka chala powerful and efficient pattern ni implement cheddam. Tarvata, manam mana sontha events ni ela create cheyalo kuda chuddam.

---

### 1. Event Delegation

**The "What"**:
Event Delegation anedhi oka simple idea: prathi child element ki oka event listener add cheyadam badulu, manam aa children anni unna **oka parent element ki matrame** event listener ni add chestam.

**The "How"**:
Parent ki add chesina event listener lopala, manam `event.target` property ni use chestam. `event.target` anedhi, event originate ayina actual child element ni manaku isthundhi. So, manam ഏ child element click ayindho telusukuni, daaniki thaggattu logic rayochu.

**The "Why" (Advantages)**:
This pattern has two major advantages, making it a go-to technique for professional developers.

1.  **Performance**: Imagine you have a list with 1000 items. Prathi item ki oka listener add cheste, adi 1000 listeners. Idi page performance ni thaggisthundhi. Daani badulu, parent `<ul>` ki okate listener pettadam chala efficient.

2.  **Dynamic Elements**: Idi biggest advantage. Manam list loki kotha items ni dynamically (JS tho) add chesam anukondi. Aa kotha items ki manam malli event listeners add cheyalsina avasaram ledhu! The single listener on the parent will automatically work for all future children as well.

**Example Scenario**:
Oka to-do list lo, ഏ `<li>` item ni click chesina, adi "completed" ga mark avvali. Manam listener ni parent `<ul>` ki pedatham.

---

### 2. Custom Events

**The "What"**:
Manam `click`, `mouseover` lanti built-in events gurinchi chusam. Kani JavaScript manaku mana sontha peru tho, mana sontha events ni create chesi, "dispatch" (fire) chese facility isthundhi.

**The "Why"**:
To decouple different parts of an application. Oka component inko component tho direct ga matladakunda, events dwara communicate cheskovachu.

*   **Example**: Oka "file uploader" component undi anukondi. Adi file upload cheyadam complete avvagane, adi `file:upload_success` ane oka custom event ni dispatch chestundhi. Vere components (like a "notification" component or a "file list" component) ee event kosam listen chestu untai. Uploader ki ee components gurinchi em teliyakkarledu. This makes our code very modular and reusable.

**The "How"**:
It's a three-step process:

1.  **Create the Event**: `new CustomEvent('eventName', { detail: { ... } })`
    *   `eventName`: Manam event ki icche peru.
    *   `detail`: Ee property lo manam event tho paatu pampalanukune custom data ni oka object la ivvochu.

2.  **Listen for the Event**: `element.addEventListener('eventName', ...)`
    *   Built-in event laage, `addEventListener` tho listen chestam.

3.  **Dispatch the Event**: `element.dispatchEvent(myEvent)`
    *   Oka element meedha ee method call cheste, aa event aa element meedha fire avuthundhi (and it will bubble up, just like a normal event!).

Let's see both of these patterns in action in the HTML and JS files!

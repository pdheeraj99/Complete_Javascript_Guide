# Section 19: Frontend Architectural Patterns 🏗️

Mawa, manam individual design patterns gurinchi nerchukunnam. Ippudu inka pedda picture chuddam. Mana entire frontend application ni ela structure cheyali? Ee section lo, large-scale applications lo use chese konni high-level architectural patterns explore cheddam.

---

### 1. State Management Patterns (Flux/Redux) 🏦

*   **The Problem**:
    *   Oka pedda application lo, chala components okate data (state) ni share cheskovali and update cheyali.
    *   Ee state ni components madhyalo props dwara pass cheyadam chala complex ga aipothundhi ("prop drilling").
    *   Oka component state ni update cheste, aa change ela flow avuthundho, vere components ela effect avuthayo track cheyadam chala kashtam.

*   **The Solution**:
    *   Centralize your application's state into a single, global **"store"**.
    *   Ee store ye mana application ki **"single source of truth"**.

*   **The "How" (Core Concepts of Redux/Flux)**:
    *   **Store**: Anni application state ni hold chese oka single object.
    *   **Actions**: State ni ela change cheyalo cheppe plain JavaScript objects. E.g., `{ type: 'ADD_USER', payload: { name: 'Ravi' } }`. State ni change cheyali ante, action ni "dispatch" cheyali.
    *   **Reducers**: **Pure functions** that take the current `state` and an `action` and return the **new state**. Evi action ni batti state ni *ela* change cheyalo define chestai.
    *   **Unidirectional Data Flow**: Ee pattern lo data flow eppudu okate direction lo untundhi: `Action -> Reducer -> Store -> View`. Idi state changes ni chala predictable ga and easy to debug ga chestundhi.

*   **Analogy: A Bank 🏦**:
    *   Meeru direct ga velli, mee bank balance (`state`) ni change cheyaleka povadam lantiది.
    *   Meeru oka form (`action`) fill chesi, teller ki ivvali.
    *   The teller (`reducer`) processes the form and updates the official ledger (`store`).
    *   The updated balance is then shown on your screen (`view`).

---

### 2. Micro-frontends 🧩

*   **The "What"**:
    *   Micro-frontends anedhi oka architectural style. Deentlo, oka pedda, monolithic frontend application ni, chala chinna, **independently deployable** "micro-apps" ga break chestam.

*   **The "Why" / Analogy**:
    *   Think of a large e-commerce site like Amazon. The "search" functionality, the "shopping cart", and the "user profile" page could all be separate micro-frontends.
    *   Prathi micro-frontend ni oka separate team develop cheyochu, possibly using different frameworks (e.g., one in React, one in Vue, one in Angular).

*   **Benefits ✅**:
    *   **Team Autonomy**: Teams can work independently without blocking each other.
    *   **Independent Deployments**: Oka team vaalla feature ni, entire application ni redeploy cheyakunda deploy cheyochu.
    *   **Scalability**: Development process ni scale cheyadam easy.

*   **Challenges ❌**:
    *   Ee micro-apps madhyalo state ni, routing ni, and consistent UI ni manage cheyadam complex ga untundhi.

---

### 3. Dependency Injection (DI) 💉

*   **The "What"**:
    *   DI anedhi oka pattern, deentlo oka object ki kavalsina dependencies (vere objects), aa object ye create cheskokunda, bayata nunchi "inject" cheyabadathai.

*   **The "Why"**:
    *   It leads to more **modular, reusable, and easily testable** code.
    *   Oka component, daaniki kavalsina `ApiService` ni ela create cheyalo telusukovalsina avasaram ledhu. Adi just, "naku oka `ApiService` kavali" ani aduguthundhi.
    *   Frameworks like **Angular** use this pattern extensively.

*   **Analogy: A Chef 🧑‍🍳**:
    *   Oka chef, thanaki kavalsina vegetables ni thane pandinchadu.
    *   Instead, aa vegetables (dependencies) thanaki "inject" cheyabadathai (supplier nunchi).
    *   Chef focus antha cooking meedha ne untundhi, not on growing vegetables. This makes the chef (component) more focused and reusable.

These architectural patterns are crucial for building large, scalable, and maintainable frontend applications.

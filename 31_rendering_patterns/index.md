# Section 22: Modern Rendering Patterns 🖼️

Mawa, manam oka web page ni user ki ela chupinchali anedaniki chala approaches unnai. Prathi daaniki daani pros and cons unnai. Ee section lo manam, most common rendering patterns and vaati trade-offs gurinchi nerchukundam. Understanding this is key for a senior developer making architectural decisions.

---

### 1. Client-Side Rendering (CSR)

*   **The "How"**:
    *   Browser, server nunchi oka minimal HTML file ni and oka pedda JavaScript bundle ni download chestundhi.
    *   Aa JavaScript browser lo run ayi, data ni fetch chesi, page antha render chestundhi.
    *   This is the traditional approach for **Single Page Applications (SPAs)** (e.g., created with Create React App).

*   **Pros ✅**:
    *   Initial load tarvata, page chala interactive ga and fast ga untundhi.
    *   Server costs thakkuva.

*   **Cons ❌**:
    *   **Slow initial page load**: User, content choodataniki mundu, aa pedda JS bundle antha download chesi, execute cheyali. Time to Interactive (TTI) can be high.
    *   **Bad for SEO**: Search engine crawlers, JS run ayye mundu, kevalam oka blank page ni choodochu.

---

### 2. Server-Side Rendering (SSR)

*   **The "How"**:
    *   User oka page ni request chesinapudu, **server** aa page ki kavalsina full HTML ni (data tho paatu) generate chesi, browser ki pampisthundhi.
    *   Browser daanini immediately display cheyochu. Tarvata, oka JS bundle load ayi, page ni interactive ga chestundhi ("hydration").

*   **Pros ✅**:
    *   **Fast initial page load**: User content ni chala twaraga choodagalaru. Time to First Contentful Paint (FCP) is low.
    *   **Great for SEO**: Crawlers ki full content unna HTML page vasthundhi.

*   **Cons ❌**:
    *   Server meedha ekkuva load (higher server costs).
    *   Prathi page navigation ki server roundtrip undochu, which can feel slower than CSR's instant client-side routing.

---

### 3. Static Site Generation (SSG)

*   **The "How"**:
    *   Entire website antha, **build time** lo ne, static HTML files ga pre-render avuthundhi.
    *   User oka page ni request cheste, server aa already ready ga unna HTML file ni just pampisthundhi. No on-the-fly generation.

*   **Pros ✅**:
    *   **Blazing fast performance** 🚀! Server-side work em undadu.
    *   Very secure and cheap to host on a CDN.
    *   Great for SEO.

*   **Cons ❌**:
    *   Dynamic, user-specific content ki suitable kaadu (e.g., a user's profile page).
    *   Content lo emaina chinna change vachina, entire site ni malli rebuild cheyali.

---

### 4. Incremental Static Regeneration (ISR)

*   **The "What"**:
    *   Idi SSG and SSR madhyalo unna oka hybrid approach. Frameworks like **Next.js** deenini popular chesayi.
    *   Idi SSG laage pani chestundhi, kani pages automatic ga background lo re-generate avvagalguthai (e.g., prathi 60 seconds ki, or data change ayinapudu).

*   **The "Why"**:
    *   It gives you the **speed of a static site** while allowing you to have **content that updates periodically** without needing a full site rebuild.
    *   It's the best of both worlds for many use cases like blogs, news sites, or e-commerce product pages.

Choosing the right rendering pattern is a critical architectural decision that depends on your application's needs for SEO, performance, and dynamic content.

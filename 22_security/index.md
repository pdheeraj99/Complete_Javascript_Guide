# Section 14: JavaScript Security 🛡️

Mawa, mana applications interactive ga ayye koddi, security anedhi chala mukhyam. Ee section lo manam, common ga vache vulnerabilities gurinchi and vaati nunchi mana users ni ela kapadalo nerchukundam.

---

### 1. Cross-Site Scripting (XSS)

**The "What"**:
XSS is one of the most common web vulnerabilities. It's an attack where a malicious user injects their own JavaScript code into your website, which then gets executed in the browser of an unsuspecting user.

**The "How"**:
This attack is possible when a web application takes user input and renders it directly into the DOM **without properly sanitizing it**. The most common mistake that leads to XSS is using `.innerHTML` with user-provided content.

**Example Scenario**:
Imagine a comment section.
1.  A user submits a comment.
2.  Your website displays this comment to other users.
3.  A malicious user submits a comment that contains a `<script>` tag:
    `<img src=x onerror="alert('You have been hacked! Your cookies are being stolen.')">`
4.  If you use `.innerHTML` to display this comment, the browser will try to render the image, fail (`src=x`), and then execute the malicious code in the `onerror` attribute.

**The "Why" (The Danger)**:
An attacker's script, running on your page, can do anything your script can do. It can:
*   Steal the user's cookies (including session cookies, which can be used to hijack their account).
*   Make API requests on behalf of the user.
*   Redirect the user to a malicious website.
*   Modify the content of your page.

**The Solution: Prevention**

1.  ⭐ **Never trust user input**: Ee rule ni eppudu gurtupettukondi. Treat all user input as potentially malicious.
2.  ⭐ **Avoid `.innerHTML`**: User input ni display cheyadaniki, eppudu `textContent` ne prefer cheyandi. `textContent` anedi, input antha plain text la treat chestundhi. `<script>` tags lantiవి execute avvakunda, text laage kanipistai.
3.  **Sanitize Input**: Okavela meeru user nunchi vachina HTML ni render cheyalsi vasthe (e.g., a rich text editor), aa input ni **sanitize** cheyali. Sanitization anedhi, dangerous tags (`<script>`, `<style>`, `onerror`, etc.) ni remove chesi, safe tags (`<b>`, `<i>`, `<p>`, etc.) ni matrame allow chestundhi. Deeni kosam `DOMPurify` lanti trusted libraries vadali.

---

### 2. Content Security Policy (CSP)

**The "What"**:
CSP is a security feature that you configure on your web server. It's an **HTTP header** (`Content-Security-Policy`) that you send along with your web page. Ee header, browser ki oka set of rules chepthundhi, ഏ sources nunchi content (scripts, styles, images) ni load cheyochu, execute cheyochu ani.

**The "Why"**:
CSP acts as a powerful second layer of defense (defense-in-depth). Okavela attacker oka XSS vulnerability ni kanipettina, mana CSP valla aa malicious script execute avvakunda undochu. For example, script kevalam mana domain nunchi matrame load avvali ani manam policy set cheste, attacker vere domain lo unna script ni inject cheyalekapovachu.

**Example Policies**:
Ee header ni server configuration lo set chestaru.

*   `Content-Security-Policy: default-src 'self';`
    *   Anni rakala content (scripts, images, etc.) kevalam mana own origin (domain) nunchi matrame load avvali.

*   `Content-Security-Policy: script-src 'self' https://apis.google.com;`
    *   Scripts kevalam mana own origin nunchi and `https://apis.google.com` nunchi matrame load avvali. Vere ekkadi nunchi load avvavu.

A strong CSP can completely disable inline scripts (`<script>alert(1)</script>`) and dangerous functions like `eval()`, making XSS attacks much, much harder.

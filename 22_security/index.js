// This script is for educational purposes to demonstrate XSS vulnerabilities.
document.addEventListener('DOMContentLoaded', () => {

    console.log("--- Security Demo Script Loaded ---");

    // --- VULNERABLE EXAMPLE ---
    // This section demonstrates the WRONG way to handle user input.
    const vulnerableInput = document.getElementById('vulnerable-input');
    const vulnerableBtn = document.getElementById('vulnerable-btn');
    const vulnerableOutput = document.getElementById('vulnerable-output');

    vulnerableBtn.addEventListener('click', () => {
        const userInput = vulnerableInput.value;

        // !!! DANGEROUS: Do NOT do this in a real application !!!
        // Using .innerHTML with untrusted user input creates an XSS vulnerability.
        // The browser will execute any script tags provided by the user.
        // This is for demonstration purposes only.
        console.warn("DEMO: Setting .innerHTML with untrusted user input. This is a security risk.");
        vulnerableOutput.innerHTML = userInput;
    });


    // --- SECURE EXAMPLE ---
    // This section demonstrates the RIGHT way to handle user input.
    const secureInput = document.getElementById('secure-input');
    const secureBtn = document.getElementById('secure-btn');
    const secureOutput = document.getElementById('secure-output');

    secureBtn.addEventListener('click', () => {
        const userInput = secureInput.value;

        // *** SAFE: This is the correct approach. ***
        // .textContent treats all input as plain text. Any HTML tags, like <script>,
        // will be displayed as literal text and will NOT be executed by the browser.
        console.info("DEMO: Setting .textContent with user input. This is safe.");
        secureOutput.textContent = userInput;
    });

});

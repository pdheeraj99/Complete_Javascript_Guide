document.addEventListener('DOMContentLoaded', () => {

    console.log("--- Web APIs Script Loaded ---");

    // --- 1. Web Storage ---
    const keyInput = document.getElementById('storage-key');
    const valueInput = document.getElementById('storage-value');
    const localSaveBtn = document.getElementById('local-save-btn');
    const sessionSaveBtn = document.getElementById('session-save-btn');
    const readBtn = document.getElementById('read-btn');
    const clearBtn = document.getElementById('clear-btn');
    const storageOutput = document.getElementById('storage-output');

    localSaveBtn.addEventListener('click', () => {
        const key = keyInput.value;
        const value = valueInput.value;
        if (key && value) {
            localStorage.setItem(key, value);
            console.log(`Saved to localStorage: {${key}: ${value}}`);
            keyInput.value = '';
            valueInput.value = '';
        }
    });

    sessionSaveBtn.addEventListener('click', () => {
        const key = keyInput.value;
        const value = valueInput.value;
        if (key && value) {
            sessionStorage.setItem(key, value);
            console.log(`Saved to sessionStorage: {${key}: ${value}}`);
            keyInput.value = '';
            valueInput.value = '';
        }
    });

    readBtn.addEventListener('click', () => {
        const key = keyInput.value;
        if (key) {
            const localValue = localStorage.getItem(key);
            const sessionValue = sessionStorage.getItem(key);
            storageOutput.innerHTML = `
                <b>From localStorage:</b> ${localValue || 'Not Found'}<br>
                <b>From sessionStorage:</b> ${sessionValue || 'Not Found'}
            `;
        }
    });

    clearBtn.addEventListener('click', () => {
        localStorage.clear();
        sessionStorage.clear();
        storageOutput.textContent = 'All storage cleared.';
        console.log('Cleared all localStorage and sessionStorage.');
    });


    // --- 2. Web Workers ---
    const workerStartBtn = document.getElementById('worker-start-btn');
    const colorChangeBtn = document.getElementById('color-change-btn');
    const workerOutput = document.getElementById('worker-output');

    if (window.Worker) {
        const myWorker = new Worker('worker.js');

        workerStartBtn.addEventListener('click', () => {
            workerOutput.textContent = 'Worker started... running heavy calculation.';
            myWorker.postMessage('start'); // Send a message to the worker to start
            console.log('Message posted to worker.');
        });

        // Listen for messages from the worker
        myWorker.onmessage = (event) => {
            const result = event.data;
            workerOutput.textContent = `Worker finished! Result: ${result}`;
            console.log('Message received from worker:', result);
        };

        myWorker.onerror = (error) => {
            console.error('Error from worker:', error);
            workerOutput.textContent = `An error occurred in the worker: ${error.message}`;
        };

    } else {
        console.log('Your browser doesn\'t support Web Workers.');
        workerStartBtn.disabled = true;
    }

    colorChangeBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
        console.log('UI color changed. The main thread was not blocked!');
    });

});

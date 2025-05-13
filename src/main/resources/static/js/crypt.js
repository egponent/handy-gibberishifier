// File that hooks html buttons and text fields to backend encryption processes.

// Function to encrypt text
function encryptText() {
    const text = document.getElementById('encryptInput').value;
    const key = document.getElementById('encryptKey').value;
    const algorithm = document.getElementById('encryptAlg').value;
    
    if (!text || !key) {
        alert('Please enter both text and encryption key');
        return;
    }
    
    // Prepare request data
    const requestData = {
        text: text,
        key: key,
        algorithm: algorithm
    };
    
    // Send request to backend
    fetch('/api/crypt/encrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('encryptOutput').value = data;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Encryption failed: ' + error.message);
    });
}

// Function to decrypt text
function decryptText() {
    const text = document.getElementById('decryptInput').value;
    const key = document.getElementById('decryptKey').value;
    const algorithm = document.getElementById('decryptAlg').value;
    
    if (!text || !key) {
        alert('Please enter both text and decryption key');
        return;
    }
    
    // Prepare request data
    const requestData = {
        text: text,
        key: key,
        algorithm: algorithm
    };
    
    // Send request to backend
    fetch('/api/crypt/decrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('decryptOutput').value = data;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Decryption failed: ' + error.message);
    });
}
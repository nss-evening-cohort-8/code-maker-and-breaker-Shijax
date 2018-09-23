// Input Fields
const encryptElem = document.getElementById('wordToEncypt');
const decryptElem = document.getElementById('codeToDecrypt');

// Buttons
const encryptButtonElem = document.getElementById('encryptButton');
const decryptButtonElem = document.getElementById('decryptButton');

// Print Strings to DOM
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

// Encyption Function
const encrypt = () => {
    let encryptdMsg = '';
    let encryptArr = [];
    let encryptStr = encryptElem.value.split("");
    for (i = 0; i < encryptStr.length; i++) {
        let coded = encryptStr[i].charCodeAt();
        encryptArr.push(coded);
        encryptdMsg = "Your encrypted message is: " + encryptArr;
        printToDom(encryptdMsg, 'encrypt');
    }
};

// Decryption Function
const decrypt = () => {
    let decryptdMsg = '';
    let decryptd = "";
    let decryptArr = decryptElem.value.split(",");
    for (i = 0; i < decryptArr.length; i++) {
        decryptd += String.fromCharCode(decryptArr[i]);
        decryptdMsg = "Your decrypted message is: " + decryptd;
        printToDom(decryptdMsg, 'decrypt');
    }
};

// Encryption Event Listener and Call
encryptButtonElem.addEventListener('click', (e) => {
    e.preventDefault();
    encrypt();
    }
);

// Decryption Event Listener and Call
decryptButtonElem.addEventListener('click', (e) => {
    e.preventDefault();
    decrypt();
    }
);

document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message");
    const shiftInput = document.getElementById("shift");
    const encryptButton = document.getElementById("encryptButton");
    const decryptButton = document.getElementById("decryptButton");
    const resultDiv = document.getElementById("result");
  
    encryptButton.addEventListener("click", function () {
      const message = messageInput.value;
      const shift = parseInt(shiftInput.value);
      const encryptedMessage = caesarCipher(message, shift);
      resultDiv.textContent = "Šifrirana poruka: " + encryptedMessage;
    });
  
    decryptButton.addEventListener("click", function () {
      const message = messageInput.value;
      const shift = parseInt(shiftInput.value);
      const decryptedMessage = caesarCipher(message, -shift);
      resultDiv.textContent = "Dešifrirana poruka: " + decryptedMessage;
    });
  
    function caesarCipher(text, shift) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
          let isUpperCase = char === char.toUpperCase();
          let code = char.charCodeAt(0);
          let shifted = (code - (isUpperCase ? 65 : 97) + shift) % 26;
          if (shifted < 0) {
            shifted += 26;
          }
          result += isUpperCase ? String.fromCharCode(shifted + 65) : String.fromCharCode(shifted + 97);
        } else {
          result += char;
        }
      }
      return result;
    }
  });
  
  
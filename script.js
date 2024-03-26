document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const passwordOutput = document.getElementById('passwordOutput');
    const lengthInput = document.getElementById('length');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numericCheckbox = document.getElementById('numeric');
    const symbolsCheckbox = document.getElementById('symbols');
  
    generateBtn.addEventListener('click', function() {
      const length = parseInt(lengthInput.value);
      const includeLowercase = lowercaseCheckbox.checked;
      const includeUppercase = uppercaseCheckbox.checked;
      const includeNumeric = numericCheckbox.checked;
      const includeSymbols = symbolsCheckbox.checked;
      const password = generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSymbols);
      const password2=password===  "undefined".repeat(length)?"please":password
      passwordOutput.value = password2
    });
  
    copyBtn.addEventListener('click', function() {
      const password = passwordOutput.value;
      copyToClipboard(password);
      alert('Password copied to clipboard!');
    });
  
    function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSymbols) {
      let charset = '';
      if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
      if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (includeNumeric) charset += '0123456789';
      if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    }
  
    function copyToClipboard(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  });
  
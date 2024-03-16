//RANDOM PASSWORD GENERATOR

const result = document.getElementById("result");
const button = document.getElementById("button");

button.addEventListener("click", function() {
    // You can adjust these values or take them from user input
    const passwordLength = document.getElementById("passwordLength").value;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("Numbers").checked;
    const includeSymbols = document.getElementById("Symbols").checked;

    generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
});


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = ";+ěščřžýáíé=(/!'_:?)ú§ů¨-.,@#$";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <=0) {
        return '(Please pick a password length)';
    }
    if(allowedChars.length ===0) {
        return '(used unsupported characters)';
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]; 
    }

    result.textContent = `Generated password: ${password}`;
}





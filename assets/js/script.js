// Assignment Code
validCharacters = [];
validLowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
validUpperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
validNumberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn = document.querySelector("#generate");

//Generate password function
function generatePassword(passwordLength) {
    var pwd = '';
    var generateUpperCase = document.getElementById("inputUpperCase").checked;
    var generateLowerCase = document.getElementById("inputLowerCase").checked;
    var generateNumbers = document.getElementById("inputNumbers").checked;
    if (generateUpperCase) {
        validCharacters.concat(validUpperCaseCharacters);
    }
    if (generateLowerCase) {
        validNumberCharacters.concat(validLowerCaseCharacters);
    }
    if (generateNumbers) {
        validCharacters.concat(validNumberCharacters);
    }
    if (generateLowerCase || generateUpperCase || generateNumbers) {
        function randomPassword() {
            for (var i = 0; i < passwordLength; i++) {
                pwd += validCharacters[Math.floor(Math.random() * validCharacters.length)];
            }
            return pwd;
        }
    } else {
        alert("Please include at least 1 type of character!");
    }
    password = randomPassword();
    return password;
}

// Write password to the #password input
function writePassword() {
    var passwordLength = document.getElementById("myPasswordLength").value;
    parseInt(passwordLength);
    if(passwordLength >= 8 && passwordLength <= 128) {
        var password = generatePassword(passwordLength);
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
    } else {
        alert("Please enter a value between 8 and 128");
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

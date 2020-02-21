// Assignment Code
validLowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
validUpperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
validNumberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
validCharacters = validLowerCaseCharacters.concat(validUpperCaseCharacters, validNumberCharacters);

var generateBtn = document.querySelector("#generate");

//Generate password function
function generatePassword(passwordLength) {
    var pwd = '';
    function randomPassword() {
        for (var i = 0; i < passwordLength; i++) {
            pwd += validCharacters[Math.floor(Math.random() * validCharacters.length)];
        }
        return pwd;
    }
    password = randomPassword();
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword(12);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

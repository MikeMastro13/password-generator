//Get the generation button id and create a variable for the password
var generateBtn = document.querySelector("#generate");
var generatedPassword = "";

//Store the character information in seperate variables
var lowerCaseLetterCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetterCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%^&&*()";
var validCharacters = "";

//Check if an input for a character is pressed and if it is add to the validCharacters variable
function generateValidCharacters() {
    var generateLowerCase = document.getElementById("inputLowerCase").checked;
    var generateUpperCase = document.getElementById("inputUpperCase").checked;
    var generateNumbers = document.getElementById("inputNumbers").checked;
    var generateSpecials = document.getElementById("inputSpecials").checked;

    if(generateLowerCase) {
        validCharacters += lowerCaseLetterCharacters;
    } else if (generateUpperCase) {
        validCharacters += upperCaseLetterCharacters;
    } else if (generateNumbers) {
        validCharacters += numberCharacters;
    } else if (generateSpecials) {
        validCharacters += specialCharacters;
    } else {
        alert("Please include at least one type of character.");
    }
}

function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)];
}

function addCharFromArray(amountOfChars) {
    for (var i = 0; i < amountOfChars; i++) {
        generatedPassword += getRandomFromArray(validCharacters);
    }
}

function generatePassword() {
    var passwordLength = document.getElementById("myPasswordLength").value;

    generateValidCharacters();
    validCharacters.split();
    addCharFromArray(passwordLength);
    return generatedPassword;
}

// Write password to the #password input
function writePassword() {
    var passwordLength = document.getElementById("myPasswordLength").value;
    parseInt(passwordLength);

    //Check for character specification inputs


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
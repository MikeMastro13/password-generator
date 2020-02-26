//Get the generation button id and create a variable for the password and valid
var generateBtn = document.querySelector("#generate");
var generatedPassword = "";
var validCharacters = "";

//Check character inputs
var generateLowerCase = document.getElementById("inputLowerCase");
var generateUpperCase = document.getElementById("inputUpperCase");
var generateNumbers = document.getElementById("inputNumbers");
var generateSymbols = document.getElementById("inputSpecials");

//Check if an input for a character is pressed and if it is add to the validCharacters variable
function generateValidCharacters() {
    var characterObject = [{
        characters: 'abcdefghijklmnopqrstuvwxyz',
        checkbox: generateLowerCase.checked
    }, {
        characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        checkbox: generateUpperCase.checked
    }, {
        characters: '0123456789',
        checkbox: generateNumbers.checked
    }, {
        characters: '!@#$%^&*()?',
        checkbox: generateSymbols.checked
    }];

    characterObject.forEach(obj => {
        if (obj.checkbox === true) {
            validCharacters = validCharacters + obj.characters;
        }
    });
}

function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)];
}

function addCharFromArray(amountOfChars) {
    for (var i = 0; i < amountOfChars; i++) {
        generatedPassword += getRandomFromArray(validCharacters);
    }
}

function generatePassword(length) {
    if(generateLowerCase.checked || generateUpperCase.checked || generateNumbers.checked || generateSymbols.checked) {
        generateValidCharacters();
        validCharacters.split();
        addCharFromArray(length);
        return generatedPassword;
    } else {
        alert("Please enter at least 1 character.");
    }
}

// Write password to the #password input
function writePassword() {
    generatedPassword = "";
    validCharacters = "";
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
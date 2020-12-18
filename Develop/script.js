// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var options = getPasswordOptions();
}

// Retrieves password
function getPasswordOptions() {

  confirm("Minimum characters for password is 8.");
  var length = parseInt(prompt("Please enter password character length desired."));

  if (length >= 8 && length <= 128) {
    var hasSpecialCharacters = confirm("Click ok to confirm special characters.");
    const symbols = "!@#$%^&*/\<>[]{}.,";
    
    //I have set the limit to 26 - the number of letters in the alphabet.
    //Math.floor will round down to whole numbers.
    var random = math.floor(Math.random() * 26);

    return hasSpecialCharacters[random];
  }

  else {
    confirm("Invalid number of characters.");
  }


}

// Conditional statement to ensure user input

//Check password length

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// const length = +lengthEl.value;
// const hasLower = lowercaseEl.checked;
// const hasUpper = uppercaseEl.checked;
// const hasNumber = numbersEl.checked;
// const hasSymbol = symbolsEl.checked;

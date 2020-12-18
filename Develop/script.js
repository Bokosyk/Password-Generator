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
    var length = parseInt(prompt("Please enter password desired: "));

    if length >= 8 && length <= 128 {
      var hasSpecialCharacters = confirm("Click ok to confirm special characters.");

      var random = math.floor(Math.random() * length);

      return hasSpecialCharacters[random];
    }

    else {
      confirm("Invalid number of characters.");
    }
  }

  // Conditional statement to ensure user input

  //Check password length

  var hasSpecialCharacters() = confirm()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var answer = [];
var specialChosen;
var lowerChosen;
var upperChosen;
var numericChosen;

var arrayPlaceholder;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //Pushes the password. There's no password.text value.
  console.log(passwordText);
  console.log(passwordText.value)
  passwordText.value = password;
}

function generatePassword() {
  var options = getPasswordOptions();
  //Options isn't returning what I want. Undefined.

  //Generates random code based on input.
  // Math.floor(Math.random() * quantity);
  console.log(options);
  return options

}

// Retrieves password
function getPasswordOptions() {

  var quantity = parseInt(prompt("Minimum characters for password is 8. Please enter desired."));
  if (!quantity) {
    alert("Input required.");
  }

  else if (quantity < 8 || quantity > 128) {
    alert("Input based on the parameters given.")
  }

  else {
    specialSelected = confirm("Will this contain special characters?");
    upperSelected = confirm("Will this contain uppercase letters?");
    lowerSelected = confirm("Will this contain lowercase letters?");
    numericSelected = confirm("Will this contain numbers?");
  };
}

generateBtn.addEventListener("click", writePassword);
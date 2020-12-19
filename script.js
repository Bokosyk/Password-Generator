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
var passwordLength = 0;
var specialChosen = false;
var lowerChosen = false;
var upperChosen = false;
var numericChosen = false;
var characterPool = [];

var arrayPlaceholder;




// Write password to the #password input
function writePassword() {
  let areRequirementsValid = getPasswordOptions();
  if(areRequirementsValid){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    //Pushes the password. There's no password.text value.
    console.log(passwordText);
    console.log(passwordText.value)
    passwordText.value = password;
    
  } else {
    alert("Invalid requirements, please try again.");
  }
}

function generatePassword_old() {
  var options = getPasswordOptions();
  //Options isn't returning what I want. Undefined.

  //Generates random code based on input.
  // Math.floor(Math.random() * quantity);
  console.log(options);
  return options

}

function generatePassword() {
  
  // add selected characters to character pool 
  // if user selects special characters add special characters to character pool 
  if(specialChosen){
    characterPool = characterPool.concat(specialCharacters);
  } 
  // if user selects numeric characters add numeric characters to character pool
  if(numericChosen){
    characterPool = characterPool.concat(numericCharacters);
  } 
  // if user selects lowercase characters add lowercase characters to character pool
  if(lowerChosen){
    characterPool = characterPool.concat(lowerCasedCharacters);
  }
  // if user selects uppercase characters add uppercase characters to character pool
  if(upperChosen){
    characterPool = characterPool.concat(upperCasedCharacters);
  }
  console.log("Character pool: " + characterPool);


  // to generate each character in the password select characters from character pool at random indexes
  let generatedCandidate = '';
  for(var i = 0; i < passwordLength; i++){
    // generate random index
    let randomIndex = Math.floor(Math.random() * characterPool.length);
    // add random character to generated password
    generatedCandidate += characterPool[randomIndex];
  }



  console.log("Generated password: " + generatedCandidate);  
  alert("Generated password: " + generatedCandidate);
  return generatedCandidate;

  // let isCandidateValid = false;
  // // verifying password and try again if validation fails, return password otherwise
  // if(specialChosen){
  //   // make sure that the candidate has at least one special char
  // } 
  // // if user selects numeric characters add numeric characters to character pool
  // if(numericChosen){
  //   // make sure that the candidate has at least one numeric char
  // } 

  // // recursively try again if candidate failed validation
  // if (!isCandidateValid) { return generatePasswords(); }
  // else{  return generatedCandidate(); }
}

// Retrieves password
function getPasswordOptions() {

  passwordLength = parseInt(prompt("Minimum characters for password is 8. Please enter desired."));

  // Message that shows up when user has made no input.
  if (!passwordLength) { 
    alert("Input required.");
    return false;

  } else if (passwordLength < 8 || passwordLength > 128) { // Input out of range.
    alert("Invalid amount of characters. 8 min, 128 max.")
    return false;
  } 
  // Get character types
  specialChosen = confirm("Will this contain special characters?");
  upperChosen = confirm("Will this contain uppercase letters?");
  lowerChosen = confirm("Will this contain lowercase letters?");
  numericChosen = confirm("Will this contain numbers?");
  return true;
}

generateBtn.addEventListener("click", writePassword);


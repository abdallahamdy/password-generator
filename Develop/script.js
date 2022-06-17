// Assignment code here

var lengthPrompt = function(){

  var passLength = parseInt(window.prompt("Please enter the length of your password (min: 8, max: 128)"));

  return passLength;

}

function generatePassword() {

  var passwordLength = lengthPrompt();

  while(isNaN(passwordLength) == true || passwordLength < 8 || passwordLength > 128){
    
    window.alert("The value you've entered is incorrect, please try again.");
    passwordLength = lengthPrompt();

    if(isNaN(passwordLength) == false && passwordLength > 8 && passwordLength < 128){
      break;
    }
  }

  return "the password";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

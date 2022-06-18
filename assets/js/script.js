// Assignment code here
var isLowerCase = '';
var isUpperCase = '';
var isNumeric = '';
var isSpecial = '';

var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "1234567890";
var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var passwordCharacters = '';

// Prompt to get desired password length
function lengthPrompt(){

  var passLength = window.prompt("Please enter the length of your password (min: 8, max: 128)");
  
  if(passLength === null){
    return;
  } else {
    passLength = parseInt(passLength);  
  }

  while(isNaN(passLength) == true || passLength < 8 || passLength > 128){
  
    window.alert("The value you've entered is incorrect, please try again.");
    passLength = lengthPrompt();

    if(isNaN(passLength) == false && passLength > 8 && passLength < 128){
      break;
    } 
  }
  return passLength;
}

// to confirm with user what character types they would like
function characterTypes(){

  isLowerCase = window.confirm("Would you like to include lower case characters?");
  isUpperCase = window.confirm("Would you like to include upper case characters?");
  isNumeric = window.confirm("Would you like to include numeric characters?");
  isSpecial = window.confirm("Would you like to include special characters?");

  while(isLowerCase == false && isUpperCase == false && isNumeric == false && isSpecial == false){
    window.alert("Please select at least one character type.");
    characterTypes();
    if(isLowerCase == true || isUpperCase == true || isNumeric == true || isSpecial == true){
      break;
    }
  }
  
}

// this function adds the character types to the passwordCharacters string based on user choices
function charGenerator(){
  passwordCharacters = '';
  if(isLowerCase){
    passwordCharacters = passwordCharacters + lowerCaseChars;
  }

  if(isUpperCase){
    passwordCharacters = passwordCharacters + upperCaseChars;
  }

  if(isNumeric){
    passwordCharacters = passwordCharacters + numericChars;
  }

  if(isSpecial){
    passwordCharacters = passwordCharacters + specialChars;
  }
  console.log(passwordCharacters);
}


function generatePassword() {

  // get the password length
  var passwordLength = lengthPrompt();

  if(passwordLength == null){
    return;
  }

  // get character types lowercase, uppercase, numeric, and/or special characters
  characterTypes();

  // when we get required character types, append them into a string
  charGenerator(); 

  // create the password string from the characters string
  var thePassword = '';
  for(var i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);

    thePassword = thePassword + passwordCharacters.charAt(randomIndex);
  }

  return thePassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  if(password == null){
    return;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

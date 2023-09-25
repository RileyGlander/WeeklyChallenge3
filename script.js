// Assignment code here
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
var numeric ="0123456789";
var specialSymbols ="!@#$%^&*()-_=+[{]}\|;:',<.>/?";



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  // ask the user for the length of the password
 var userLength = prompt('How many characters do you want to include?')

  // make sure the user entered a number between 8-128
  if( userLength <8 ){
   alert ('You need to include any number from 8-128')
   return
  }
  if (userLength >128){
    alert ('You have more numbers than needed')
    return
  }
  // ask the user if they want uppercase, lowercase, numbers, or symbols in the password
  var confirmUppercase = confirm('Do you want to include any Uppercase letters?')
  var confirmLowercase = confirm('Do you want to include any Lowercase letters?')
  var confirmNumbers = confirm('Do you want to include any numbers?')
  var confirmSymbols = confirm('Do you want to include any symbols?')
  // make sure the user selected at least one character type

  if(confirmUppercase, confirmLowercase, confirmNumbers, confirmSymbols === false){
    alert('please select at least one option!')
    return;
  }

  // randomize the password 


// return "";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

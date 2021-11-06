// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ask user how many characters they want the pw to be

// ask user if they would like special characters 

// ask user if they would like numbers

// depending on above answers we may need to seperate each into own function

// math.rnadom creates number between 0 and 1 randomly use this to create pw?  Or another function?




var generatePassword = function () {

};
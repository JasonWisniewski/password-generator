// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Global variables, options user can select for
var specialCharactersList = "@,%+\/!#$^?:)(}{][~-_.";
var lowerCaseLettersList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLettersList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var NumericsList = "0123456789";

//password length function varibles made global for later reference 
var passwordLengthInput
var specialCharacter
var upperCaseLetters
var lowerCaseLetters
var numerics
var finalPassword = "";
var possibleCharacters = "";

// function to ask user what they want and to store info in var above
var generatePassword = function () {
  
  // ask user how long they would like their pasword to be, parse int changes answer to number instead of a string
  passwordLengthInput = parseInt(window.prompt("How long would you like your password to be enter between 8 and 128 characters"));

  // If player enters in invalid answer bring back to question
  if (passwordLengthInput < 8 || passwordLengthInput > 128 || !passwordLengthInput) {
    window.alert("You need to provide a valid answer! Please try again.");
    return "";
  }

  // Would you like special characters? 
  specialCharacter = window.confirm("Would you like this password to contain special characters? ok = yes cancel = no" ); 
  console.log(specialCharacter);

  //  creating array possibleCharacters to be randomly selected from for 
  if (specialCharacter === true){
    possibleCharacters += specialCharactersList;
  };
  console.log('special char', possibleCharacters);

  // Would you like lower case letters?
  lowerCaseLetters = window.confirm("Would you like lower case letters? ok = yes cancel = no");

  // if user would like lowercaseletters include them in the array
  if (lowerCaseLetters === true){
    possibleCharacters += lowerCaseLettersList;
  };
  console.log('lower case' , possibleCharacters);

   // Would user like upper case letters?
  upperCaseLetters = window.confirm("Would you like upper case letters? ok = yes cancel = no");

  // if so include upper case letters in the array
  if (upperCaseLetters === true){
    possibleCharacters += upperCaseLettersList;
  };
  console.log('upper case' , possibleCharacters);

    // Would user like numerics?
  numerics = window.confirm("Would you like numerics? ok = yes cancle = no");

  // if so inculde numbers in array
  if (numerics === true){
    possibleCharacters += NumericsList;
  };
  console.log('numerics', possibleCharacters);

  // if user hits cancel on each prompt tell user they must choose one and send to begining
  if(!numerics && !lowerCaseLetters && !upperCaseLetters && !specialCharacter){
  alert("you have to enter at least one valid parameter")
  return ""
  }

  console.log('possChar split to array', possibleCharacters);
  // for looping desired length of Password
  
  for (var i = 0; i < passwordLengthInput; i++) {

    // creating a random number out of characters user would like
    var randomziedNumber = Math.floor(Math.random() * possibleCharacters.length);

    // using random number generated and saving it in the final password variable
    finalPassword += possibleCharacters[randomziedNumber];

    console.log(randomziedNumber);
    console.log(finalPassword);
  };
  console.log('final password', finalPassword);
  // return finalPassword to button click function above to display on page
  return finalPassword;
};
// call function when generateBtn is clicked on page
generateBtn.addEventListener("click", writePassword)
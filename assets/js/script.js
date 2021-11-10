// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Global variables
var characters = ["letter","number","symbol"];
var symbol = ["!","@","#","$","^","&","*"];
var lowerCaseLettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numerics = [0,1,2,3,4,5,6,7,8,9];

//password length function varibles made global for later reference 
var passwordLengthInput
var specialCharacter
var upperCaseLetters
var lowerCaseLetters
var numerics
var finalPassword

// function to ask user what they want and to store info in var above
var passwordInput = function () {

  // ask user how long they would like their pasword to be
  passwordLengthInput = window.prompt("How long would you like your password to be enter between 8 and 128 characters");
  // answer stored in string need to convert to number so we can read it later


// If player enters in invalid answer bring back to question
  if (passwordLengthInput < 8 && passwordLengthInput > 128 &&passwordLengthInput === "" && passwordLengthInput === "null" && !passwordLengthInput) {
    window.alert("You need to provide a valid answer! Please try again.");
    return console.log(passwordInput());
  }

  // reset form
  // formEl.reset();

  // Would you like special characters? 
  specialCharacter = window.prompt("Would you like this password to contain special characters? ok = yes cancle = no" ); 

  // Would you like lower case letters?
  lowerCaseLetters = window.prompt("Would you like lower case letters? ok = yes cancle = no");
    console.log(lowerCaseLetters);

   // Would you like upper case letters?
  upperCaseLetters = window.prompt("Would you like upper case letters? ok = yes cancle = no");

    // Would you like numerics?
  numerics = window.prompt("Would you like numerics? ok = yes cancle = no");

  
};
passwordInput();

var passwordRandomizer = function(){
  // run through loop amount of times indicated by password length
  for (var i = 0; i < passwordLengthInput; i++) {
  
  // then we need to randomly select between each loop

  if ( lowerCaseLetters === true) {
    var lowerCaseLettersRandomizer = function(){
      // gives me a random number between 0-26
      var uniqueNumber26 = Math.floor(Math.random()*26);
      // need to take this number to identify 
      finalPassword =  lowerCaseLetters[uniqueNumber26,i];
      // need to tell code to save this value in final password
      // then move on to next criteria
    } 
    }
  };

}
passwordRandomizer();